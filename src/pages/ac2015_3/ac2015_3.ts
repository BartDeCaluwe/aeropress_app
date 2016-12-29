import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ac2015_2recipePage } from './tabs/ac2015_2recipeTab/ac2015_2recipe';
import { Ac2015_2brewPage } from './tabs/ac2015_2brewTab/ac2015_2brew';

/*
  Generated class for the Ac2015 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-ac2015',
    templateUrl: 'ac2015_2.html'
})
export class Ac2015_2Page {
    tab1: any;
    tab2: any;

    constructor(public navCtrl: NavController) {
        this.tab1 = Ac2015_2recipePage;
        this.tab2 = Ac2015_2brewPage;
    }

    ionViewDidLoad() { }

}
