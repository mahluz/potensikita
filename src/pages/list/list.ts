import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  items : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// console.log(navParams);
  	
  }

  ionViewDidLoad() {
  	this.items=this.navParams.data;
  	console.log(this.items);

    console.log('ionViewDidLoad ListPage');
  }

  trading(item){
  	let data = item;
  	this.navCtrl.push("TradingPage",data);
  }
  selling(item){
  	let data = item;
  	this.navCtrl.push("SellingPage",data);
  }

}
