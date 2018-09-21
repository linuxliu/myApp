import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ViewController} from 'ionic-angular';

/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var Swiper;

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {
  items: any;
  swiper: any;
  @ViewChild('Slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
    this.initSwiper();
    this.getContentItems();
  }

  initSwiper() {
    this.swiper = new Swiper('.notify-slides .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 0
    });
  }

  onBackClick() {
    this.viewCtrl.dismiss();
  }

  onMsgSend() {

  }

  onSlideDidChange() {
    console.log('slideChange');
    let index = this.slides.getActiveIndex();
    console.log(index);
    if (index > this.slides.length() - 1) {
      return;
    }
    this.swiper.slideTo(index, 200);
    this.setStyle(index);

  }

  selectPageMenu(index) {
    console.log('pageMenu');
    this.setStyle(index);
    this.slides.slideTo(index, 200);
  }

  setStyle(index) {
    let slides = document.getElementsByClassName('notify-slides')[0].getElementsByClassName('swiper-slide');
    if (index < slides.length) {
      for (let i = 0; i < slides.length; i++) {
        let s = slides[i];
        s.className = 'swiper-slide';
      }
      slides[index].className = 'swiper-slide bottomLine'
    }

  }

  getContentItems() {
    this.items = [
      {
        'index': 0,
        'name': 'heart',
        'color': 'dark',
        'title': '系统消息'

      },
      {
        'index': 1,
        'name': 'heart',
        'color': 'dark',
        'title': '交易动态'

      },
      {
        'index': 2,
        'name': 'heart',
        'color': 'dark',
        'title': '评论'

      },
      {
        'index': 3,
        'name': 'heart',
        'color': 'dark',
        'title': '赞'

      },
    ];
  }

  onClick(item) {
    let index = item.index;
    console.log(index);
  }


}
