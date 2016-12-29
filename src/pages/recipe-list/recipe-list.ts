import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ac2015Page } from '../ac2015/ac2015';
import { Ac2015_2Page } from '../ac2015_2/ac2015_2';

/*
  Generated class for the RecipeList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html'
})
export class RecipeListPage {
  show2015: boolean = false;
  
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() { }
  
  navigateToAc2015Page(){
    this.navCtrl.push(Ac2015Page);
  }

  navigateToAc2015_2Page(){
    this.navCtrl.push(Ac2015_2Page);
  }

  toggleAc2015(){
    this.show2015 = !this.show2015;
  }
}
