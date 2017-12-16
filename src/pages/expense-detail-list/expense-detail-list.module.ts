import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpenseDetailListPage } from './expense-detail-list';

@NgModule({
  declarations: [
    ExpenseDetailListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpenseDetailListPage),
  ],
})
export class ExpenseDetailListPageModule {}
