import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExpenseDetailService } from '../../app/services/expense-detail-service';
import { ExpenseDetail as Detail } from '../../app/models/expense-detail';

/**
 * Generated class for the ExpenseDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-detail',
  templateUrl: 'expense-detail.html',
})
export class ExpenseDetailPage {
  detail: Detail = new Detail();

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private expenseDetailService: ExpenseDetailService) {
    this.expenseDetailService.getById(this.navParams.get('detailId')).subscribe(data => {
      this.detail = data;
    });
  }

  ionViewDidLoad() {}

}
