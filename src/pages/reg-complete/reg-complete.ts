import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the RegCompletePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg-complete',
  templateUrl: 'reg-complete.html',
})
export class RegCompletePage {
  public user: any = {
    tel: '',
    passwd: ''
  };
  public verifyCode: any = {
    tips: '',
    count: 0,
    disable: true,
    code: ''
  };

  public Status2: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegCompletePage');
    this.init();
  }

  init() {
    this.user.tel = this.navParams.get('tel');
    this.user.passwd = this.navParams.get('passwd');
    this.Status2 = true;
    this.verifyCode.count = 120;
    this.verifyCode.tips = '重新获取(' + this.verifyCode.count + ')';
    this.verifyCode.disable = true;
    this.setTime();

  }

  onClick(index) {
    switch (index) {
      case 0:
        this.getCode();
        break;
      case 1:
        this.doRegister();
        break;
      default:
        break;
    }

  }

  getCode() {
    // 发请求获取新的验证码成成功
    this.verifyCode.disable = true;
    this.setTime();
  }

  doRegister() {
    // 请求注册接口，用户名，密码，验证码
    let toast = this.toastCtrl.create({
      message:'用户名:' + this.user.tel + '注册成功,跳转登录',
      duration:3000,
      position: 'top'
    });
    toast.present();
    this.navCtrl.push('LoginPage');
  }

  setTime() {
    if (this.verifyCode.count == 1) {
      this.verifyCode.count = 120;
      this.verifyCode.disable = false;
      this.verifyCode.tips = '获取验证码';
      return;
    }
    else {
      this.verifyCode.count--;
    }
    setTimeout(() => {
      this.verifyCode.tips = '重新获取(' + this.verifyCode.count + ')';
      this.setTime();
    }, 1000);
  }

  onChange() {
    this.onBlue();
  }

  onBlue() {
    console.log(this.verifyCode.code.length);
    console.log(this.verifyCode.disable);
    if (this.verifyCode.code.length === 6 && this.verifyCode.disable) {
      this.Status2 = false;
    }
  }

}
