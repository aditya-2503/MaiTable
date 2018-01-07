import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
//import{ HomePage} from '../home/home';
import{ TableService } from "../../app/services/Table_services"

@Component({
  selector: 'page-grpview',
  templateUrl: 'viewGrp.html'
})
export class ViewGrpPage {
    items:any;
    items1:any;
    items2:any;
    grp:any;
    sem:any;
    branch:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public tbser:TableService) {
this.grp="c1";
this.sem="7";
this.branch=this.navp.get('branch');
this.getData();

}
getData(){
    this.tbser.getgrpT(this.branch).subscribe(response=>{
       console.log("hello");
        console.log(response.Res);
        //console.log(response.Res);
        this.items2=response.Res;
      
      
      });
      this.tbser.getSemT(this.branch).subscribe(rest=>{
        console.log("hello");
        console.log(rest.Res);
        //console.log(response.Res);
        this.items1=rest.Res;
      
      })
}
getData1(){
    this.tbser.getGrpWise(this.branch,this.grp,this.sem).subscribe(resw=>{
        console.log("hello");
        console.log(resw);
        //console.log(response.Res);
        this.items=resw.Vew;
      
    })
}
chnGrp(){
    this.getData1();
}
chnGrp1(){
    this.getData1();
}
}
