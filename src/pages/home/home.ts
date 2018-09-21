import {Component} from '@angular/core';
import {IonicPage, NavController, Slides} from 'ionic-angular';
import {ViewChild} from "@angular/core";

declare var Swiper;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  swiper: any;
  @ViewChild('Slides') slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
      slidesPerView: 2,
      spaceBetween: 0
    });
  }

  onSlideDidChange() {
    let index = this.slides.getActiveIndex();
    if (index > this.slides.length() - 1) {
      return;
    }
    this.swiper.slideTo(index, 200);
    this.setStyle(index);

  }

  selectPageMenu(index) {
    this.setStyle(index);
    this.slides.slideTo(index, 200);
  }

  setStyle(index) {
    let slides = document.getElementsByClassName('pageMenuSlides')[0].getElementsByClassName('swiper-slide');
    if (index < slides.length) {
      for (let i = 0; i < slides.length; i++) {
        let s = slides[i];
        s.className = 'swiper-slide';
      }
      slides[index].className = 'swiper-slide bottomLine'
    }

  }

  onSearchClick(){
    this.navCtrl.push('SearchPage');
  }

  onNotifyClick(){
    this.navCtrl.push('NotifyPage');
  }
}
