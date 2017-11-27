import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseDetailFormPage } from './expense-detail-form';

@NgModule({
  declarations: [
    ExpenseDetailFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseDetailFormPage),
  ],
})
export class ExpenseDetailFormPageModule {}
