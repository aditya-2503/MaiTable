import { Component } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import{HomePage} from '../home/home';
import{TableService} from '../../app/services/Table_services';

@Component({
  templateUrl: 'SignUp.html'
})

export class SignUpPage {
    email:any;
    password:any;

constructor(public viewCtrl: ViewController, public nvc:NavController, public tbsr:TableService) {}
logForm() {
    this.tbsr.getSignup(this.email,this.password).subscribe(response=>{

        console.log(response);
        if(response=="{Success}")
        this.nvc.push(HomePage);
    });
    console.log(this.email);

  }
}