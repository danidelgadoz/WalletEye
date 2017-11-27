import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExpenseSubcategory } from '../models/expense-subcategory';
import { ExpenseDetail } from '../models/expense-detail';

@Injectable()
export class ExpenseDetailService {  

  constructor() { 
      
  }

  list() : Observable<ExpenseSubcategory[]> {
    let subcategories;
    subcategories = JSON.parse(localStorage.gasto_categorias);
    return Observable.of(subcategories);
  }

  listBySubcategory(id: number): Observable<ExpenseDetail[]> {
    let expenseDetails;
    expenseDetails = JSON.parse(localStorage.gasto_detalle);
    
    expenseDetails = expenseDetails.filter(function(detail){         
      return detail.gasto_subcategorias_id == id;
    });
    
    return Observable.of(expenseDetails);
  }

  create(detail: ExpenseDetail): Observable<ExpenseDetail> {
    let details: ExpenseDetail[] = JSON.parse(localStorage.gasto_detalle); 
    let newDetail: ExpenseDetail = detail;    

    newDetail.id = (new Date()).getTime();
    newDetail.fecha = new Date();
    details.push(newDetail);
    localStorage.setItem('gasto_detalle', JSON.stringify(details));
    
    return Observable.of(newDetail);
  }

}