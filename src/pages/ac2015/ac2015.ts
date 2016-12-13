import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ac2015recipePage } from './tabs/ac2015recipeTab/ac2015recipe';
import { Ac2015brewPage } from './tabs/ac2015brewTab/ac2015brew';

/*
  Generated class for the Ac2015 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-ac2015',
  templateUrl: 'ac2015.html'
})
export class Ac2015Page {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = Ac2015recipePage;
    this.tab2 = Ac2015brewPage;
   }

  ionViewDidLoad() {  }

}
