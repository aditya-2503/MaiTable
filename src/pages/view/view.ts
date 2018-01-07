import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services"

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class ViewPage {
    items:any;
    day:String;
    username:String;
    branch:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {
this.day=this.navp.get("day");
this.username=this.navp.get("username");
this.branch=this.navp.get('branch');
this.getData();

}
getData(){
    this.tbser.getPosts(this.username,this.day,this.branch).subscribe(response=>{
       console.log("hello");
        console.log(response.Res);
        //console.log(response.Res);
        this.items=response.Res;
      
      
      });
}
}
