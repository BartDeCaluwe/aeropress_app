import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Ac2015Page } from '../pages/ac2015/ac2015';
import { Ac2015brewPage } from '../pages/ac2015/tabs/ac2015brewTab/ac2015brew';
import { Ac2015recipePage } from '../pages/ac2015/tabs/ac2015recipeTab/ac2015recipe';
import { Ac2015_2Page } from '../pages/ac2015_2/ac2015_2';
import { Ac2015_2brewPage } from '../pages/ac2015_2/tabs/ac2015_2brewTab/ac2015_2brew';
import { Ac2015_2recipePage } from '../pages/ac2015_2/tabs/ac2015_2recipeTab/ac2015_2recipe';
import { RecipeListPage } from '../pages/recipe-list/recipe-list';

@NgModule({
  declarations: [
    MyApp,
    Ac2015Page,
    Ac2015brewPage,
    Ac2015recipePage,
    Ac2015_2Page,
    Ac2015_2recipePage,
    Ac2015_2brewPage,
    RecipeListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Ac2015Page,
    Ac2015brewPage,
    Ac2015recipePage,
    Ac2015_2Page,
    Ac2015_2recipePage,
    Ac2015_2brewPage,
    RecipeListPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
