import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseSubcategoryPage } from '../expense-subcategory/expense-subcategory';
import { ExpenseCategoryService } from '../../app/services/expense-category-service';
import { ExpenseCategory as Category } from '../../app/models/expense-category';

/**
 * Generated class for the ExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-category',
  templateUrl: 'expense-category.html',
})
export class ExpenseCategoryPage {
  categories: Category[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ExpenseCategoryService: ExpenseCategoryService) {
      this.loadingData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpensePage');    
  }

  loadingData() {
    this.ExpenseCategoryService.list().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  goTo (category) {
    console.log(category);
    this.navCtrl.push(ExpenseSubcategoryPage, category.id);
  };

}
