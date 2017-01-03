import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Ac2015Page } from '../pages/ac2015/ac2015';
import { Ac2015_2Page } from '../pages/ac2015_2/ac2015_2';
import { RecipeListPage } from '../pages/recipe-list/recipe-list';
import { CoffeeRatioPage } from '../pages/coffee-ratio/coffee-ratio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RecipeListPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'List of Recipes', component: RecipeListPage },
      { title: 'Aeropress Championship 2015 1st', component: Ac2015Page },
      { title: 'Aeropress Championship 2015 2nd', component: Ac2015_2Page },
      { title: 'Coffee ratio calculator', component: CoffeeRatioPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
