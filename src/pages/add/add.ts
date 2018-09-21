import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController} from "ionic-angular";
import {UpworkPage} from "../upwork/upwork";

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  on_clicked() {
    console.log('clicked');
    this.viewCtrl.dismiss();
  }
  onImgClick() {
    this.navCtrl.push('UpworkPage')

  }

}
