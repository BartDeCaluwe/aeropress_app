import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { SettingsModalPage } from '../settingsModal/settingsModal';

/*
  Generated class for the CoffeeRatio page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-coffee-ratio',
  templateUrl: 'coffee-ratio.html'
})
export class CoffeeRatioPage {
  ratio: number = 15;
  coffee: number = 18;
  water: number = this.ratio * this.coffee;
  maxCoffee: number = 1000 / this.ratio;
  showDecimals: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {}

  ionViewDidLoad() {
    console.log('Hello CoffeeRatioPage Page');
  }

  calculateWater(){
    this.calculateMaxCoffee();
    this.water = this.ratio * this.coffee;
  }

  calculateCoffee(){
    this.calculateMaxCoffee();
    if(this.showDecimals){
      this.coffee = parseFloat((this.water / this.ratio).toFixed(2));
    } else {
      this.coffee = Math.round(this.water / this.ratio);
    }
  }

  calculateMaxCoffee(){
    this.maxCoffee = 1000 / this.ratio;
  }

  openSettingsModal(){
    let settings = this.modalCtrl.create(SettingsModalPage, { showDecimals: this.showDecimals });
    settings.onDidDismiss(data => {
      this.showDecimals = data;
      this.calculateCoffee();
    });
    settings.present();
  }
}
