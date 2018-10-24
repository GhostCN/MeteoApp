import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map"
@Injectable()

export class MeteoService {

  constructor(private serv:Http){

  }

  getMeteo(ville:string){
  return  this.serv.get("http://api.openweathermap.org/data/2.5/forecast?q="+ville+"&APPID=a2f917e11bca7cc3718f71e8ee7a6784").
      map(info=>info.json());
  }


}
