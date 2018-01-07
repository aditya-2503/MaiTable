import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactLandPage} from '../factland/factland';
import { StudLandPage} from '../studland/studland';
import { AlertController } from 'ionic-angular';
import{ SignUpPage} from'../SignUp/SignUp';
import{ TableService} from '../../app/services/Table_services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public tbsr:TableService,public navCtrl: NavController, public alertCtrl:AlertController) {

  }
  
onbtn1(){
 // this.navCtrl.push(FactLandPage);
//this.navCtrl.popTo(FactLandPage);
this.presentPrompt();
}
onbtn2(){
this.presentPrompt2();
}

presentPrompt() {
  const alert = this.alertCtrl.create({
    title: 'GetIn',
    cssClass: 'navb1',
    inputs: [
      {
        name: 'Branch',
        type: 'text',
        placeholder: 'E-Mail'  
      },
      {
        name:'Email',
        type: 'text',
        placeholder: 'Password....'
      }
    
    ],
    buttons: [
      {
        text: 'OK',
        role: 'submit',
        handler: data => {
          console.log('Cancel clicked');
         // this.username=data.Username;
         
         if(!data.Branch || !data.Email){
console.log("NULL ENTERED");
         }
         else{ 
this.tbsr.getSignin(data.Branch,data.Email).subscribe(response=>{
console.log(response);
//console.log(response.Res[0]);
if(response=="{Error}"){}
else
if(response.Res[0].success=="yes"){
localStorage.setItem("email",data.Branch);
this.navCtrl.push(FactLandPage);
}
else{

}
});
        
          //this.navCtrl.push(FactLandPage,{
            //user:data.Username,
            //branch:data.Branch,
            //email:data.Email
        //  });
        }

        }
      },
      {
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'New User',
        handler: data => {
          console.log('Cancel clicked');
          this.navCtrl.push(SignUpPage);
        
        }

      }
    ]
  });
  alert.present();
}

presentPrompt2() {
  const alert = this.alertCtrl.create({
    title: 'GetIn',
    cssClass: 'navb1',
    inputs: [
      {
        name: 'Branch',
        type: 'text',
        placeholder: 'Branch ...(CSE,ECE,MAE,IT,EEE)'  
      },
      {
        name: 'Sem',
        type: 'num',
        placeholder: 'Semester ...(3,4,5,6,7)'  
      },
      {
        name: 'Sec',
        type: 'text',
        placeholder: 'Group ...(C1,C2,C3,I4,I5,EE6,EE7)'  
      }
    
    ],
    buttons: [
      {
        text: 'OK',
        role: 'submit',
        handler: data => {
          console.log('Cancel clicked');
         // this.username=data.Username;
         if(!data.Branch || !data.Sec || !data.Sem){
console.log("NULL ENTERED");
         }
         else{
          this.navCtrl.push(StudLandPage,{
           // user:data.Username,
            branch:data.Branch,
            sem:data.Sem,
            sec:data.Sec
          });}

        }
      },
      {
        text:'Cancel',
        role:'cancel'
      }
    ]
  });
  alert.present();
}
}
