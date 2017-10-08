import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DatasourceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatasourceProvider {
  wisata : any[]=[];

  constructor(public http: Http) {
    console.log('Hello DatasourceProvider Provider');
    this.wisata = [
    	{
    		"title":"Goa Kreo",
    		"description":"lorem ipsum dolor sit amet"
    	},
    	{
    		"title":"Lawang Sewu",
    		"description":"lorem ipsum dolor sit amet"	
    	}
    ];
  }
  // end constructor

}
