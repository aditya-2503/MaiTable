import { Component } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import{HomePage} from '../home/home';

@Component({
  templateUrl: 'PopOv.html'
})

export class PopovverPage {
constructor(public viewCtrl: ViewController, public nvc:NavController) {}
close() {
    this.viewCtrl.dismiss();
  }
  signOut(){
      localStorage.clear();
this.nvc.push(HomePage);
  }
}