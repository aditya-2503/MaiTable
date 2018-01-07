import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services";

@Component({
  selector: 'page-viewLab',
  templateUrl: 'viewLab.html'
})
export class LabWisePage {
    items:any;
    
    email:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {

this.email=this.navp.get('branch');
console.log(this.email);
this.getData();

}
getData(){
    this.tbser.getLabWise(this.email).subscribe(response=>{
       console.log("hello");
       console.log(response);
        //console.log(response.Res);
      this.items=response.Res;
      
      
      });
}
}
