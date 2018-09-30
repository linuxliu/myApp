import {Component, ElementRef} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public Status: any;
  public eye: string;
  public type: string;
  user = {
    tel: '',
    passwd: ''
  };


  constructor(public navCtrl: NavController, public navParams: NavParams, public eleRef: ElementRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.init();
  }

  init() {
    this.Status = true;
    this.eye = 'eye-off';
    this.type = 'password';
  }

  onClick(index) {
    console.log('click %d', index);
    switch (index) {
      case 1:
        if (!this.Status) {
          // 请求服务器验证是否该手机号已经注册，如果注册，显示已注册，请登录，如果未注册，跳转到验证码界面
          this.navParams
          this.navCtrl.push('RegCompletePage', {
            tel:this.user.tel,
            passwd:this.user.passwd
          });
        }
        break;
      case 0:
        if (this.eye === 'eye-off') {
          this.eye = 'eye';
          this.type = 'text';
        }
        else {
          this.eye = 'eye-off';
          this.type = 'password';
        }

        break;
      default:
        break;
    }
  }

  onBlur(index) {

    if (/^1[34578]\d{9}$/.test(this.user.tel)
      && this.user.passwd.length >= 6
      && this.user.passwd.length <= 20) {
      if (this.Status) {
        this.Status = false;
      }
    }
    else {
      this.Status = true;
    }
  }

  onChange(index) {
    this.onBlur(index);
  }

}
