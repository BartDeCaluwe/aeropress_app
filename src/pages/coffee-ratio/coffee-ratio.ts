import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello CoffeeRatioPage Page');
  }

  calculateWater(){
    this.calculateMaxCoffee();
    this.water = this.ratio * this.coffee;
  }

  calculateCoffee(){
    this.calculateMaxCoffee();    
    this.coffee = parseFloat((this.water / this.ratio).toFixed(2));
  }

  calculateMaxCoffee(){
    this.maxCoffee = 1000 / this.ratio;
  }
}
