import { Component } from '@angular/core';
import {ModalController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {GalleryPage} from "../pages/gallery/gallery";
import {MeteoPage} from "../pages/meteo/meteo";
import {PlacesPage} from "../pages/places/places";


@Component({
  templateUrl: 'app.html'
})



export class MyApp {

  rootPage:any = HomePage;
  menus=[{title:"Gallery",component:GalleryPage,icon:'camera'},{title:"Meteo",component:MeteoPage,icon: 'ionic'},{title:"Places",
    component:PlacesPage,icon: 'bookmarks'}];
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public modal:ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  OnePage(m){
    this.rootPage=m.component;

  }

  ShowPage(){
    this.modal.create({

    })
  }


}

