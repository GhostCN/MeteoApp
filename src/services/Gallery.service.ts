import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class GalleryService {
  public host:string="https://pixabay.com/api/";

  constructor(public http:Http){

  }

  chercher(motcle:string,size:number,page:number)
  {
   return this.http.get(this.host+"?key=10076790-2749191750c4081fe109cb490&q="+motcle+"&per_page="+size+"&page="+page)
      .map(resp=>resp.json());
  }
}
