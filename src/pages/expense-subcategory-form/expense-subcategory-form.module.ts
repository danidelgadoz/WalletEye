import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseSubcategoryFormPage } from './expense-subcategory-form';

@NgModule({
  declarations: [
    ExpenseSubcategoryFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseSubcategoryFormPage),
  ],
})
export class ExpenseSubcategoryFormPageModule {}
