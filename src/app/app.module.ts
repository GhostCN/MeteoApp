import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MeteoPage} from "../pages/meteo/meteo";
import {PlacesPage} from "../pages/places/places";
import {GalleryPage} from "../pages/gallery/gallery";
import {HttpModule} from "@angular/http";
import {GalleryService} from "../services/Gallery.service";
import {DetailPage} from "../pages/detail/detail";
import {MeteoService} from "../services/Meteo.Service";
import {PlaceService} from "../services/Place.service";
import {NewPlacePage} from "../pages/new-place/new-place";
import {IonicStorageModule} from "@ionic/storage";
import {Geolocation} from "@ionic-native/geolocation";
import {DetailPlacePage} from "../pages/detail-place/detail-place";
import {AgmCoreModule} from "@agm/core"
import {Camera} from "@ionic-native/camera";
import { AngularFireAuth } from 'angularfire2/auth';

import {AuthService} from "../services/AuthService";
import {NgxErrorsModule} from "@ultimate/ngxerrors"


@NgModule({
  declarations: [
    MyApp,
    HomePage,MeteoPage,PlacesPage,GalleryPage,DetailPage,NewPlacePage,DetailPlacePage
  ],
  imports: [
NgxErrorsModule,
    BrowserModule,HttpModule,AgmCoreModule.forRoot({
      apiKey:"AIzaSyAAFWeH7ZKudU7FATAksZP_orRu2YOQVoc"
    }),
    IonicModule.forRoot(MyApp),IonicStorageModule.forRoot({
      name:"__PlacesData",
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,MeteoPage,PlacesPage,GalleryPage,DetailPage,NewPlacePage,DetailPlacePage
  ],
  providers: [
    StatusBar,GalleryService,MeteoService,PlaceService,Geolocation,
    SplashScreen,Camera,AngularFireAuth,AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
