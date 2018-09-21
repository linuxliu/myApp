import {LoadingController, AlertController, ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class AppGlobal {
  static cache: any = {};
  static domain = "https://liu.com";
  static API: any = {
    getCategories: '/api/getCategories'
  };
}

@Injectable()
export class AppService {
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, private alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  httpGet(url, params, callback, loader: boolean = false) {
    let loading = this.loadingCtrl.create({})
    if (loader) {
      loading.present();
    }
    this.http.get(url).subscribe(
      data => {
        if (loader) {
          loading.dismiss();
        }
        callback();

      },
      error => {
        if (loader) {
          loading.dismiss();
        }
        this.handleError(error);
      })
  }

  httpPost(url, params, callback, loader: boolean = false) {
    let loading = this.loadingCtrl.create({})
    if (loader) {
      loading.present();
    }
    this.http.post(AppGlobal.domain + url, null).subscribe(
      data => {
        if (loader) {
          loading.dismiss()
        }
      },
      error => {
        if (loader) {
          loading.dismiss()
        }
        this.handleError(error);
      }
    );
  }

  private handleError(error: Response | any) {
    let msg = '';
    if (error.status == 400) {
      msg = '请求无效(code:400)';
      console.log(msg);
    }
    if (error.status == 404) {
      msg = '请求资源不存在(code:404)';
      console.log(msg)
    }
    if (error.status == 500) {
      msg = '服务器发生错误(code:500)'
      console.log(msg);
    }
    if (msg.length > 0) {
      this.toast(msg);
    }
  }

  private toast(msg, callback?) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      dismissOnPageChange: true,
    });
    toast.present();
    if (callback) {
      callback();
    }
  }

  setItem(key: string, obj: any) {
    try {
      let json = JSON.stringify(obj);
      window.localStorage[key] = json;
    }
    catch (e) {
      console.error(e);
    }
  }

  getItem(key: string, callback) {
    try {
      let json = window.localStorage[key];
      let obj = JSON.parse(json);
      callback(obj);
    }
    catch (e) {
      console.error(e);
    }
  }

  alert(msg, callback?) {
    if (callback) {
      let alert = this.alertCtrl.create({
        title: '提示',
        message: msg,
        buttons: [{
          text: '确定',
          handler: data => {
            callback(data);
          }
        }]
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: '提示',
        message: msg,
        buttons: ['确定']
      });
    }
  }
}
