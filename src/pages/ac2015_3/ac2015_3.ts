import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ac2015_3recipePage } from './tabs/ac2015_3recipeTab/ac2015_3recipe';
import { Ac2015_3brewPage } from './tabs/ac2015_3brewTab/ac2015_3brew';

/*
  Generated class for the Ac2015 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-ac2015',
    templateUrl: 'ac2015_3.html'
})
export class Ac2015_3Page {
    tab1: any;
    tab2: any;

    constructor(public navCtrl: NavController) {
        this.tab1 = Ac2015_3recipePage;
        this.tab2 = Ac2015_3brewPage;
    }

    ionViewDidLoad() { }

}
