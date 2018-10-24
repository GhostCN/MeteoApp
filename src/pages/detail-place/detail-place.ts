import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Place} from "../../model/Place";
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the DetailPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})
export class DetailPlacePage {
  place:Place;
  photo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public camera:Camera,public alertCtl:AlertController) {
    this.place=this.navParams.get("place");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

  oneTakePicture(){
    const option1:CameraOptions={
      quality:50,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.CAMERA,
      allowEdit:true,
      targetWidth:320,
      targetHeight:240,
    };

    const option2:CameraOptions={
      quality:50,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.MediaType.PICTURE,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit:true,
      targetWidth:320,
      targetHeight:240,
    };
    let alert=this.alertCtl.create({
      title:"source",
      subTitle:"Choisissez la source",
      buttons:
        [ {text:"Camera",handler:()=>{this.takePicture(option1);}},
          { text:"Galery",handler:()=>{this.takePicture(option2);}}
        ]
    });
    alert.present();

  }

  takePicture(option){
    this.camera.getPicture(option).then(data=>{
      this.photo='data:image/jpeg;base64,'+data
    })

  }

}
