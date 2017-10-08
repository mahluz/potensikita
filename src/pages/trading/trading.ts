import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TradingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trading',
  templateUrl: 'trading.html',
})
export class TradingPage {
	data:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.data = this.navParams.data;
  	console.log(this.data);
  	// console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TradingPage');
  }

}
