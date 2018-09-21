import { Component } from '@angular/core';
import {IonicPage, ModalController} from "ionic-angular";
import {HomePage} from "../home/home";
import {CirclePage} from "../circle/circle";
import {MainPage} from "../main/main";

@IonicPage()
@Component({
  selector:'my-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = "CartPage";
  tab3Root = CirclePage;
  tab4Root = "PersonPage";

  constructor(public modalCtrl:ModalController) {

  }

  onAdd() {
    console.log('click');
    let addModal = this.modalCtrl.create("AddPage");
    addModal.present();
  }
}
