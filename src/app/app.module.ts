import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppService} from "./app.service";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule} from "@angular/common/http";
import {RecommPage} from "../pages/recomm/recomm";
import {FollowPage} from "../pages/follow/follow";
import {HomePage} from "../pages/home/home";
import {CirclePage} from "../pages/circle/circle";
import {InfoPage} from "../pages/info/info";
import {ChatPage} from "../pages/chat/chat";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CirclePage,
    RecommPage,
    FollowPage,
    InfoPage,
    ChatPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp,{
      iconMode:'ios',
      mode:'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CirclePage,
    RecommPage,
    FollowPage,
    InfoPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
