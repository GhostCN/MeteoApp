import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlaceService} from "../../services/Place.service";
import {Place} from "../../model/Place";
import {Geolocation} from "@ionic-native/geolocation";


/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public serNewPlace:PlaceService,public servGeo:Geolocation) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAdd(p:Place){
    p.location={latitude:0,longitude:0};
    this.servGeo.getCurrentPosition().
    then(position=>{
      p.location.longitude=position.coords.longitude;
      p.location.latitude=position.coords.latitude;
      p.timestamp=new Date().getTime();
      this.serNewPlace.addPlace(p);
      this.navCtrl.pop();
    }).catch(err=>{
      p.location.longitude=0;
      p.location.latitude=0;
      p.timestamp=new Date().getTime();
      this.serNewPlace.addPlace(p);
      this.navCtrl.pop();
    })

  }

}
