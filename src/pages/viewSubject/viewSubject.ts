import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services";

@Component({
  selector: 'page-viewSub',
  templateUrl: 'viewSubject.html'
})
export class SubPage {
    items:any;
    items1:any;
    //day:String;
    sem:String;
    sec:String;
    subject:any;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {

this.sem=this.navp.get('sem');
this.sec=this.navp.get('grp')
console.log(this.sem+" "+ this.sec);
this.subject='Wireless';
this.getData();

}
getData(){

    this.tbser.getSub(this.sem,this.sec).subscribe(response=>{
       console.log("hello");
       console.log(response);
        //console.log(response.Res);
      this.items1=response.Res;
      
      
      });
}
chnSub(){
    this.tbser.getSubS(this.sem,this.sec,this.subject).subscribe(response=>{
        console.log("hello");
        console.log(response);
         //console.log(response.Res);
       this.items=response.Res;
    });
}
}
