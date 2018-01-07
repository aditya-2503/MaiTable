import { Component } from '@angular/core';
import { NavController,NavParams,PopoverController } from 'ionic-angular';
import{ PopovverPage} from '../PopOv/PopOv';
import{ TableService } from "../../app/services/Table_services";


@Component({
  selector: 'page-freeLab',
  templateUrl: 'freeLab.html'
})
export class FreeLabPage {
    items:any;
    
    day:String;
    dept:String;
  constructor(public ppc:PopoverController,public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {

//this.email=this.navp.get('branch');
//console.log(this.email);
this.day="Monday";
this.dept="CSE";
this.getData();

}
getData(){
    this.tbser.getFreeLab(this.day,this.dept).subscribe(response=>{
       console.log("hello");
       console.log(response);
        //console.log(response.Res);
      this.items=response.Res;
      
      
      });
}
chnGrp(){
this.getData();
}
chnGrp1(){
    this.getData();
}
onPop(myEvent){
    let p=this.ppc.create(PopovverPage);
    p.present({
      ev:myEvent
    });
    }
}
