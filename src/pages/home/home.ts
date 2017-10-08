import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatasourceProvider } from '../../providers/datasource/datasource';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public datasource:DatasourceProvider) {
  	console.log(this.datasource.wisata);
  }
  wisata(){
  	let data = this.datasource.wisata;
  	this.navCtrl.push("ListPage",data);
  }
  tambang(){
  	let data = this.datasource.tambang;
  	this.navCtrl.push("ListPage",data);
  }
  tani(){
  	let data = this.datasource.tani;
  	this.navCtrl.push("ListPage",data);
  }

}
