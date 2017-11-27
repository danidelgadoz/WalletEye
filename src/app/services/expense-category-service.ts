import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExpenseCategory } from '../models/expense-category';

@Injectable()
export class ExpenseCategoryService {  

  constructor() { 
      
  }

  list() : Observable<ExpenseCategory[]> {
    let categories;
    categories = JSON.parse(localStorage.gasto_categorias);
    return Observable.of(categories);
  }

}