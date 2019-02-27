import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Opt = "";
  constructor(public navCtrl: NavController) {

  }

  press(txt){
    this.Opt = txt;
  }

}
