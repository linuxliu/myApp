import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  onClick(index) {
    switch (index) {
      case 0:
        console.log(0);
        this.navCtrl.push('RegisterPage');
        break;
      case 1:
        console.log(1);
        this.navCtrl.push('LoginPage');
        break;
      case 2:
        console.log(2);
        this.navCtrl.push('TabsPage');
        break;
      case 3:
        console.log(3);
        break;
      case 4:
        console.log(4);
        break;
      default:
        console.log(index);
        break;
    }
  }

}
