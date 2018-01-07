import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services";

@Component({
  selector: 'page-viewWeekly',
  templateUrl: 'viewWeekly.html'
})
export class WeeklyPage {
    items:any;
    
    email:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {

this.email=this.navp.get('branch');
console.log(this.email);
this.getData();

}
getData(){
    this.tbser.getWeekT(this.email).subscribe(response=>{
       console.log("hello");
       console.log(response);
        //console.log(response.Res);
      this.items=response.Vew;
      
      
      });
}
}
