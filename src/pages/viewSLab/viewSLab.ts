import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services";

@Component({
  selector: 'page-viewSLab',
  templateUrl: 'viewSLab.html'
})
export class LabSPage {
    items:any;
    //day:String;
    sem:String;
    sec:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {

this.sem=this.navp.get('sem');
this.sec=this.navp.get('grp')
console.log(this.sem+" "+ this.sec);
this.getData();

}
getData(){
    this.tbser.getLabS(this.sem,this.sec).subscribe(response=>{
       console.log("hello");
       console.log(response);
        //console.log(response.Res);
      this.items=response.Res;
      
      
      });
}
}
