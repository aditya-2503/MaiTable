import { Component } from '@angular/core';
import { NavController,NavParams,PopoverController } from 'ionic-angular';
import{ ViewPage} from '../view/view';
import{ TableService } from '../../app/services/Table_services';
import { PopovverPage} from '../PopOv/PopOv';
import { WeeklyPage} from '../viewWeekly/viewWeekly';
import{ ViewGrpPage } from '../viewGrp/viewGrp';
import { LabWisePage} from '../viewLab/viewLab';
import{ FreeLabPage} from '../freeLab/freeLab';
@Component({
  selector: 'page-home',
  templateUrl: 'factland.html'
})
export class FactLandPage {

email:String;
items:any;

  constructor(public ppc:PopoverController ,public navCtrl: NavController, public navp:NavParams,public tbser:TableService) {
this.navCtrl.remove(0);
this.email=localStorage.getItem("email");
console.log("err"+localStorage.getItem("email"));
  }

  onMonday(){

this.navCtrl.push(ViewPage,{
day:"Monday",

branch:this.email
})
  }
  onTuesday(){
    this.navCtrl.push(ViewPage,{
      day:"Tuesday",
      branch:this.email
      })
      
  }
  onWednesday(){
    this.navCtrl.push(ViewPage,{
      day:"Wednesday",
      branch:this.email
      })
      
  }
  onThursday(){
    this.navCtrl.push(ViewPage,{
      day:"Thursday",
      branch:this.email
      })
      
  }
  onFriday(){
    this.navCtrl.push(ViewPage,{
      day:"Friday",
      branch:this.email
      })
      
  }
  onPop(myEvent){
  let p=this.ppc.create(PopovverPage);
  p.present({
    ev:myEvent
  });
  }
  
 onWeekly(){
   this.navCtrl.push(WeeklyPage,{
     branch:this.email
   });

 }
 onGrpw(){
   this.navCtrl.push(ViewGrpPage,{
branch:this.email
   });
 } 
 onLabw(){
  this.navCtrl.push(LabWisePage,{
    branch:this.email
       });
 }
 onFreeLab(){
   this.navCtrl.push(FreeLabPage);
 }
}
