import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IdiomaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idioma',
  templateUrl: 'idioma.html',
})
export class IdiomaPage {

  public form = [
    {val: 'Español', isChecked: true},
    {val: 'Inglés', isChecked: false},
    {val: 'Alemán', isChecked: false},
    {val: 'Portugués', isChecked: false},
    {val: 'Chino', isChecked: false}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IdiomaPage');
  }

  actualizarIdiomas(){
    var name;
    var bool;
    for(let entry of this.form){
      if(entry.isChecked == true){
        name = entry.val; 
        bool = true;
      }
      else{
        bool = false;
      }
    }
    if(bool == false){
      this.form[0].isChecked = true;
    }
    for(let entry of this.form){
      if(entry.val != name){
        entry.isChecked = false; 
      }
    }
  }

}
