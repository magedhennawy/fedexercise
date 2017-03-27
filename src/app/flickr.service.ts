import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class flickrService {

  constructor(private http: Http) { }


  apiKey = 'a5e95177da353f58113fd60296e1d250';
  userId = '24662369@N07';
  baseURI = 'https://api.flickr.com/services/rest/';

  callFlickrFunctions(flickrMethod,page) {
    return this.http.get(this.baseURI +
      '?method=' + flickrMethod +
      '&api_key=' + this.apiKey +
      '&user_id=' + this.userId +
      '&format=json' +
      '&nojsoncallback=1' +
      '&page='+page, {
    }).map((res:Response) => res.json());
  }
}
