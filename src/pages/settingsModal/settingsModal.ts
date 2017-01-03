import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the CoffeeRatio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settingsModal',
  templateUrl: 'settingsModal.html'
})
export class SettingsModalPage {
    showDecimals: boolean;

    constructor(public params: NavParams, public viewCtrl: ViewController) {
      this.showDecimals = params.get('showDecimals');
    }

    close(){
        this.viewCtrl.dismiss(this.showDecimals);
    }
 }