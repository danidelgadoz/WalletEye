import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpenseSubcategoryFormPage } from '../expense-subcategory-form/expense-subcategory-form';
import { ExpenseDetailPage } from '../expense-detail/expense-detail';
import { ExpenseCategoryPage } from '../expense-category/expense-category';


import { ExpenseSubcategoryService } from '../../app/services/expense-subcategory-service';
import { ExpenseSubcategory as Subcategory } from '../../app/models/expense-subcategory';
// import { ExpenseCategory as Category } from '../../app/models/expense-category';

/**
 * Generated class for the ExpenseSubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expense-subcategory',
  templateUrl: 'expense-subcategory.html',
})
export class ExpenseSubcategoryPage {
  subCategorylist : Subcategory[]; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private ExpenseSubcategoryService: ExpenseSubcategoryService) {    
    this.ExpenseSubcategoryService.listByCategory(this.navParams.data).subscribe(data => {
      this.subCategorylist = data;      
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpenseSubcategoryPage');
  }
  
  add() {
    this.navCtrl.push(ExpenseSubcategoryFormPage, this.navParams.data);
  }

  viewExpensesDetail(item) {
    console.log(item)
    this.navCtrl.push(ExpenseDetailPage, {'subcategoryId': item.id});
  }

  goBackToCategories() {
    console.log("goBackToCategories..")
    this.navCtrl.push(ExpenseCategoryPage);
  };

}
