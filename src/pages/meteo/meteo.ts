import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MeteoService} from "../../services/Meteo.Service";

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {
climat:any;
i:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public useServ:MeteoService,private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  onGetMeteo(dataForm)
  {
    let loading=this.loadingCtrl.create({
      content:"un instant!!!"
    });
    loading.present();
    this.useServ.getMeteo(dataForm.ville).subscribe(data=>{
      this.climat=data;
      loading.dismiss();
    },
        error1 => {
      console.log(error1);
      loading.dismiss();
    })
  }



}
