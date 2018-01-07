import { Component } from '@angular/core';
import { NavController,NavParams,PopoverController } from 'ionic-angular';
import{ ViewSPage} from '../viewS/viewS';
import{ WeeklySPage} from '../viewSWeekly/viewSWeekly';
import { LabSPage} from '../viewSLab/viewSLab';
import{ SubPage } from '../viewSubject/viewSubject';
import{ PopovverPage} from '../PopOv/PopOv'
@Component({
  selector: 'page-studland',
  templateUrl: 'studland.html'
})
export class StudLandPage {
username:String;
branch:String;
sem:String;
sec:String;
  constructor(public navCtrl: NavController, public navp:NavParams, public ppc:PopoverController) {
this.navCtrl.remove(0);
//this.username=this.navp.get('user');
this.branch=this.navp.get('branch');
this.sem=this.navp.get('sem');
this.sec=this.navp.get('sec');
  }
  onMon(){
    
    this.navCtrl.push(ViewSPage,{
    day:"Monday",
    
    sem:this.sem,
    grp:this.sec
    })
      }
      onTuesday(){
        this.navCtrl.push(ViewSPage,{
          day:"Tuesday",
          sem:this.sem,
          grp:this.sec
           })
          
      }
      onWednesday(){
        this.navCtrl.push(ViewSPage,{
          day:"Wednesday",
          sem:this.sem,
          grp:this.sec
          })
          
      }
      onThursday(){
        this.navCtrl.push(ViewSPage,{
          day:"Thursday",
          sem:this.sem,
          grp:this.sec
          })
          
      }
      onFriday(){
        this.navCtrl.push(ViewSPage,{
          day:"Friday",
          sem:this.sem,
          grp:this.sec
           })
          
      }
       
 onWeekly(){
  this.navCtrl.push(WeeklySPage,{
    sem:this.sem,
    grp:this.sec
    });

}
onGrpw(){
  this.navCtrl.push(SubPage,{
    sem:this.sem,
    grp:this.sec
     });
} 
onLabw(){
 this.navCtrl.push(LabSPage,{
  // branch:this.email
  sem:this.sem,
  grp:this.sec

      });
}
onPop(myEvent){
  let p=this.ppc.create(PopovverPage);
  p.present({
    ev:myEvent
  });
  }
}
