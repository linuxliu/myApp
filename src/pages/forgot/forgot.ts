import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  public user: any = {
    tel: '',
    passwd: '',
    passwd_type: 'password',
    pwd_name: 'eye-off'
  };
  public verifyCode: any = {
    tips: '获取验证码',
    count: 120,
    disable: true,
    code: ''
  };
  public modifyStatus: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }

  onChange(index) {
    if (/^1[34578]\d{9}$/.test(this.user.tel)
      && this.user.passwd.length >= 6
      && this.user.passwd.length <= 20) {
      if (this.verifyCode.disable && index !== 2) {
        this.verifyCode.disable = false;
      }
      if (this.verifyCode.code.length === 6) {
        this.modifyStatus = false;
      }
    }
    else {
      this.modifyStatus = true;
    }

  }

  onBlur(index) {
    this.onChange(index);
  }

  onClick(index) {
    switch (index) {
      case 0:
        if (/^1[34578]\d{9}$/.test(this.user.tel)
          && this.user.passwd.length >= 6
          && this.user.passwd.length <= 20) {
          this.verifyCode.disable = true;
          this.get_code();
        }
        break;
      case 1:
        this.modify_passwd();

        break;
      case 2:
        if (this.user.pwd_name === 'eye') {
          this.user.pwd_name = 'eye-off';
          this.user.passwd_type = 'password';
        }
        else {
          this.user.pwd_name = 'eye';
          this.user.passwd_type = 'text';
        }
        break;
      default:
        break
    }

  }

  setTime() {
    if (this.verifyCode.count === 1) {
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

  get_code() {
    this.setTime();
  }

  modify_passwd() {
    // console.log('modify_passwd');
    // let modal = this.toastCtrl.create({
    //   message: '修改密码成功，请重新登录',
    //   duration: 2000,
    //   position: 'top'
    //
    // });
    // modal.present();
    this.navCtrl.push('LoginPage');
  }

}
