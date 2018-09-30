import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {el} from "@angular/platform-browser/testing/src/browser_util";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginStatus: boolean = true;
  public user: any = {
    tel: '',
    passwd: {
      'text': '',
      'img': 'eye-off',
      'type': 'password'
    }
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onBlur(index) {
    this.onChange(index);
  }

  onChange(index) {
    if (/^1[34578]\d{9}$/.test(this.user.tel)
      && this.user.passwd.text.length >= 6
      && this.user.passwd.text.length <= 20) {
      this.loginStatus = false;
    }
    else {
      this.loginStatus = true;
    }
  }

  onClick(index) {
    switch (index) {
      case 0:
        if (this.user.passwd.img === 'eye') {
          this.user.passwd.img = 'eye-off';
          this.user.passwd.type = 'password';
        }
        else {
          this.user.passwd.type = 'text';
          this.user.passwd.img = 'eye'
        }
        break;
      case 1:
        this.do_login();
        break;
      case 2:
        this.navCtrl.push('RegisterPage');
        break;
      case 3:
        this.navCtrl.push('ForgotPage');
        break;
      case 4:
        break;
      case 5:
        break;
      default:
        break
    }
  }

  do_login() {
    this.navCtrl.push('TabsPage');
  }
}
