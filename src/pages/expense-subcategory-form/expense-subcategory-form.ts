import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseSubcategoryPage } from '../expense-subcategory/expense-subcategory';

import { ExpenseCategoryService } from '../../app/services/expense-category-service';
import { ExpenseSubcategoryService } from '../../app/services/expense-subcategory-service';
import { ExpenseCategory as Category } from '../../app/models/expense-category';
import { ExpenseSubcategory as Subcategory } from '../../app/models/expense-subcategory';

/**
 * Generated class for the ExpenseSubcategoryFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-subcategory-form',
  templateUrl: 'expense-subcategory-form.html',
})
export class ExpenseSubcategoryFormPage {
  categories: Category[];
  category: Category;
  subcategory: Subcategory = new Subcategory();

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ExpenseSubcategoryService: ExpenseSubcategoryService,
              private ExpenseCategoryService: ExpenseCategoryService) {    

    this.ExpenseCategoryService.list().subscribe(data => {
      this.categories = data;
      this.subcategory.gasto_categorias_id = navParams.data;
    });
  }

  ionViewDidLoad() {}

  create() {
    this.ExpenseSubcategoryService.create(this.subcategory).subscribe(data => {
      this.navCtrl.push(ExpenseSubcategoryPage, data.gasto_categorias_id);
    });  
  }

  cancel() {
    this.navCtrl.push(ExpenseSubcategoryPage, this.navParams.data);
  }

}
