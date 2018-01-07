import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services"

@Component({
  selector: 'page-viewS',
  templateUrl: 'viewS.html'
})
export class ViewSPage {
    items:any;
    day:String;
    sem:String;
    sec:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {
this.day=this.navp.get("day");
this.sem=this.navp.get("sem");
this.sec=this.navp.get('grp');
this.getData();

}
getData(){
    this.tbser.getPost(this.sem,this.sec,this.day).subscribe(response=>{
       console.log("hello");
        console.log(response);
        //console.log(response.Res);
        this.items=response.Res;
      
      
      });
}
}
