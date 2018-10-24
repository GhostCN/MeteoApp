import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contact={name:"Ghost",tel:"777667971",email:"mbackesene93@gmail.com"};
  constructor(public navCtrl: NavController) {

  }

}
