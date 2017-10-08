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
  wisata:any[];
  tambang:any[];
  tani:any[];

  constructor(public http: Http) {
    console.log('Hello DatasourceProvider Provider');
    this.wisata = [
    	{
        id:"1",
    		title:"Goa Kreo",
        photo:"assets/images/kreo.jpg",
    		description:"lorem ipsum dolor sit amet",
        trading:"trading goa kreo",
        selling:"selling goa kreo"
    	},
    	{
        id:"2",
    		title:"Lawang Sewu",
        photo:"assets/images/lawang.jpg",
    		description:"lorem ipsum dolor sit amet",
        trading:"trading lawang sewu",
        selling:"selling lawang sewu"	
    	}
    ];
    this.tambang = [
      {
        id:"1",
        title:"Tambang 1",
        photo:"assets/images/tambang1.jpg",
        description:"lorem ipsum dolor sit amet",
        trading:"trading tambang 1",
        selling:"selling tambang1"
      },
      {
        id:"2",
        title:"Tambang 2",
        photo:"assets/images/tambang2.jpg",
        description:"lorem ipsum dolor sit amet",
        trading:"trading tambang 2",
        selling:"selling tambang 2"
      }
    ];
    this.tani = [
      {
        id:"1",
        title:"Tani 1",
        photo:"assets/images/tani1.jpg",
        description:"lorem ipsum dolor sit amet",
        trading:"trading tani 1",
        selling:"selling tani 1"
      },
      {
        id:"2",
        title:"Tani 2",
        photo:"assets/images/tani2.jpg",
        description:"lorem ipsum dolor sit amet",
        trading:"trading tani 2",
        selling:"selling tani 2"
      }
    ];
  }
  // end constructor

}
