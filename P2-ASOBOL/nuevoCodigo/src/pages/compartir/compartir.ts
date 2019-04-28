import { Component, Inject } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DOCUMENT} from '@angular/common';

/**
 * Generated class for the CompartirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compartir',
  templateUrl: 'compartir.html',
})
export class CompartirPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompartirPage');
  }

  WhatsApp(){
    window.location.href='https://www.whatsapp.com/';
  }

  Facebook(){
    window.location.href='https://www.facebook.com/';
  }

  Twitter(){
    window.location.href='https://twitter.com/';
  }

  Instagram(){
    window.location.href='https://www.instagram.com/';
  }

  Snapchat(){
    window.location.href='https://www.snapchat.com/l/es/';
  }

  Telegram(){
    window.location.href='https://web.telegram.org/#/login';
  }
}
