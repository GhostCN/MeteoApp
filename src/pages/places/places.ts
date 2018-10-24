import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlaceService} from "../../services/Place.service";
import {NewPlacePage} from "../new-place/new-place";
import {Place} from "../../model/Place";
import {DetailPlacePage} from "../detail-place/detail-place";


/**
 * Generated class for the PlacesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {
places:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public servPlace:PlaceService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  ionViewWillEnter(){
      this.servPlace.getAllPlace().then(rep=>{
        this.places=rep;
      })
  }

  onNewPlace(){

    this.navCtrl.push(NewPlacePage);
  }

  oneDetailPlace(p:Place){
    this.navCtrl.push(DetailPlacePage,{place:p});
  }

}
