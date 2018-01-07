import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import{ PopoverPage } from '../pages/PopOverPage/PopOverPage';
import{ FactLandPage } from '../pages/factland/factland';
import { StudLandPage } from '../pages/studland/studland';
import { ViewPage } from '../pages/view/view';
import { WeeklyPage} from '../pages/viewWeekly/viewWeekly';
import { HttpModule } from"@angular/http";
import{ ViewGrpPage} from '../pages/viewGrp/viewGrp';
import{ LabWisePage} from '../pages/viewLab/viewLab';
import{ ViewSPage} from '../pages/viewS/viewS';
import {WeeklySPage} from '../pages/viewSWeekly/viewSWeekly';
import{ LabSPage} from '../pages/viewSLab/viewSLab';
import{SubPage} from '../pages/viewSubject/viewSubject';
import{ FreeLabPage} from '../pages/freeLab/freeLab';
import{ PopovverPage} from '../pages/PopOv/PopOv';
import{ SignUpPage} from '../pages/SignUp/SignUp';
import{ TableService } from '../app/services/Table_services';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FactLandPage,
    StudLandPage,
    ViewPage,   
    WeeklyPage,
    ViewGrpPage,
    LabWisePage,
    ViewSPage,
    WeeklySPage,
    LabSPage,
    SubPage,
    FreeLabPage,
    PopovverPage,
    SignUpPage
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FactLandPage,
    StudLandPage,
    ViewPage,
    WeeklyPage,
    ViewGrpPage,
    LabWisePage,
    ViewSPage,
    WeeklySPage,
    LabSPage,
    SubPage,
    FreeLabPage,
    PopovverPage,
    SignUpPage
  ],
  providers: [
    TableService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
