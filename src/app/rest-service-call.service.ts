import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//import { Model } from './model';

@Injectable()
export class RestServiceCallService {

  constructor (private http: Http) {}
  

  /*
  {
    "profile": {
      "username": "eric",
      "bio": "Cofounder of Thinkster.io, kinda looks like Peeta from the Hunger Games",
      "image": "http://i.imgur.com/S66L2XZ.jpg",
      "following": false
      }
  }
  */

  //To use the Http service, we need to import & inject it
  //Http returns an Observable with the Response object
    //Observables may emit data more than once, so they can be subscribed/unsubscribed from
    //Http doesn't actually make the request to the server until there is a subscription to the observable
  getUser() {
    /*
    getUser method is firing off a GET request to the profile info from the server
    When the data comes back, we use the map operator to take the response data,
    convert it to JSON, and then return it to any subscribers that are waiting for the data
    to resolve.
    */
    //profile URL: https://conduit.productionready.io/api/profiles/eric
    return this.http.get('https://conduit.productionready.io/api/profiles/eric')
      .map((res:Response) => res.json());
  }

  /*
  private testUrl = 'https://gturnquist-quoters.cfapps.io/api/random';
  
  constructor(private http:Http) { }

  getTestJson(): Observable<Model> {
    return this.http.get(this.testUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  */
}