import {Injectable} from "@angular/core";
import {Place} from "../model/Place";
import {Storage} from "@ionic/storage";

@Injectable()
export class PlaceService {
places:Array<Place>=[{title:"A"},{title:"B"},{title:"C"}];
  constructor(public storage:Storage){

  }

  addPlace(p:Place){
    this.places.push(p);
    return this.storage.set("places",this.places);
  }

  getAllPlace(){
   return  this.storage.get("places").then(data=>{
      this.places=data!=null?data:[];
      return this.places;
    });
  }




}
