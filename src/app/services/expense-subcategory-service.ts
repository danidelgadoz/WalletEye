import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExpenseSubcategory } from '../models/expense-subcategory';

@Injectable()
export class ExpenseSubcategoryService {  

  constructor() { 
      
  }

  list() : Observable<ExpenseSubcategory[]> {
    let subcategories;
    subcategories = JSON.parse(localStorage.gasto_subcategorias);
    return Observable.of(subcategories);
  }

  listByCategory(idCategory: number): Observable<ExpenseSubcategory[]> {
    let subcategories;
    subcategories = JSON.parse(localStorage.gasto_subcategorias);
    
    subcategories = subcategories.filter(function(subcategory){      
      return subcategory.gasto_categorias_id == idCategory;
    });
    
    return Observable.of(subcategories);
  }

  getById(id: number) : Observable<ExpenseSubcategory> {
    let subcategories = JSON.parse(localStorage.gasto_subcategorias);

    subcategories = subcategories.filter(function(item){
      return item.id == id;
    });

    return Observable.of(subcategories[0]);
  }

  create(subcategory: ExpenseSubcategory): Observable<ExpenseSubcategory> {
    let subcategories: ExpenseSubcategory[] = JSON.parse(localStorage.gasto_subcategorias); 
    let newsubcategory: ExpenseSubcategory = subcategory;    
    newsubcategory.id = (new Date()).getTime();

    subcategories.push(newsubcategory);
    localStorage.setItem('gasto_subcategorias', JSON.stringify(subcategories));
    
    return Observable.of(newsubcategory);
  }

}