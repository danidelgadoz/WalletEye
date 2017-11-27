import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExpenseCategoryPage } from '../pages/expense-category/expense-category';
import { ExpenseSubcategoryPage } from '../pages/expense-subcategory/expense-subcategory';
import { ExpenseSubcategoryFormPage } from '../pages/expense-subcategory-form/expense-subcategory-form';
import { ExpenseDetailPage } from '../pages/expense-detail/expense-detail';
import { ExpenseDetailFormPage } from '../pages/expense-detail-form/expense-detail-form';

import { ExpenseCategoryService } from './services/expense-category-service';
import { ExpenseSubcategoryService } from './services/expense-subcategory-service';
import { ExpenseDetailService } from './services/expense-detail-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExpenseCategoryPage,
    ExpenseSubcategoryPage,
    ExpenseSubcategoryFormPage,    
    ExpenseDetailPage,
    ExpenseDetailFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExpenseCategoryPage,
    ExpenseSubcategoryPage,
    ExpenseSubcategoryFormPage,    
    ExpenseDetailPage,
    ExpenseDetailFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExpenseCategoryService,
    ExpenseSubcategoryService,
    ExpenseDetailService
  ]
})
export class AppModule {}
