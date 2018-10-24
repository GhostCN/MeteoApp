import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import "rxjs/add/operator/map"
import {GalleryService} from "../../services/Gallery.service";
import {DetailPage} from "../detail/detail";


/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
motcle:string="";
images:any={hits:[]};
currentpage:number=1;
size:number=5;
totalpages:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public serv:GalleryService,public loadCtl:LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  Search(){
    this.images.hits=[];
    this.doSearch();
  }

  doSearch(){
    let loading=this.loadCtl.create({
      spinner: 'dots',
      duration: 2000,
      content: 'Patientez svp...'
    });
    loading.present();

    this.serv.chercher(this.motcle,this.size,this.currentpage).
      subscribe(data=>{
        this.totalpages=data.totalHits / this.size;
        if(this.totalpages % this.size !=0){
          ++this.totalpages
        }
       data.hits.forEach(h=>{
         this.images.hits.push(h);
       })

    },error1 => {
      console.log(error1);

    })
  }

  doInfinite(infinite){
    if(this.currentpage<this.totalpages)
    {
      ++this.currentpage;
      this.doSearch();
    }
    infinite.complete();
  }

  showDetail(im){
    this.navCtrl.push(DetailPage,{Myimage:im});
  }

}
