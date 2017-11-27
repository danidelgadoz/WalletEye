import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseSubcategoryPage } from './expense-subcategory';

@NgModule({
  declarations: [
    ExpenseSubcategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseSubcategoryPage),
  ],
})
export class ExpenseSubcategoryPageModule {}
