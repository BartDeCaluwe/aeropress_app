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
  metric: boolean = true;
  gramsToOz: number = 0.03527396;
  gramsToFlOz: number = 0.03381402;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    console.log('Hello CoffeeRatioPage Page');
  }

  calculateWater() {
    this.calculateMaxCoffee();
    if (this.showDecimals) {
      this.water = parseFloat((this.coffee * this.ratio).toFixed(2));
    } else {
      this.water = Math.round(this.coffee * this.ratio);
    }
  }

  calculateCoffee() {
    this.calculateMaxCoffee();
    if (this.showDecimals) {
      this.coffee = parseFloat((this.water / this.ratio).toFixed(2));
    } else {
      this.coffee = Math.round(this.water / this.ratio);
    }
  }

  calculateMaxCoffee() {
    if (!this.metric) {
      this.maxCoffee = 40 / this.ratio;
    } else {
      this.maxCoffee = 1000 / this.ratio;
    }
  }

  metricToImperial() {
    this.coffee = this.coffee * this.gramsToOz;
    this.water = this.water * this.gramsToFlOz;
  }

  openSettingsModal() {
    let settings = this.modalCtrl.create(SettingsModalPage, { showDecimals: this.showDecimals, metric: this.metric });
    settings.onDidDismiss(data => {
      this.showDecimals = data.showDecimals;
      this.metric = data.metric;
      this.calculateCoffee();
      if (!this.metric) {
        this.metricToImperial();
      }
    });
    settings.present();
  }
}
