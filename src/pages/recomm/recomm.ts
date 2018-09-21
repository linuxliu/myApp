import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RecommPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recomm',
  templateUrl: 'recomm.html',
})
export class RecommPage {
  imgs:Array<string>;
  recomms:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getHomeSowImgs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecommPage');
  }

  getHomeSowImgs() {
    this.imgs = [
      'assets/imgs/test1.jpeg',
      'assets/imgs/test2.jpeg',
      'assets/imgs/logo.png',
      'assets/imgs/logo.png',
      'assets/imgs/logo.png',
      'assets/imgs/logo.png',
    ]
  }

  getRecomms() {
    this.recomms = [
      {

      },
      {

      },
      {

      },
      {

      },
    ];
  }

}
