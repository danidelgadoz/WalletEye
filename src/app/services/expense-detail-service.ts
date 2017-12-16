import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExpenseDetail } from '../models/expense-detail';

@Injectable()
export class ExpenseDetailService {  

  constructor() { 
      
  }

  list() : Observable<ExpenseDetail[]> {
    let gasto_detalle;
    gasto_detalle = JSON.parse(localStorage.gasto_detalle);
    return Observable.of(gasto_detalle);
  }

  listBySubcategory(id: number): Observable<ExpenseDetail[]> {
    let expenseDetails;
    expenseDetails = JSON.parse(localStorage.gasto_detalle);
    
    expenseDetails = expenseDetails.filter(function(detail){         
      return detail.gasto_subcategorias_id == id;
    });
    
    return Observable.of(expenseDetails);
  }

  getById(id: number): Observable<ExpenseDetail> {
    let expenseDetails = JSON.parse(localStorage.gasto_detalle);
    
    let expenseDetail = expenseDetails.find(function(detail){         
      return detail.id == id;
    });
    
    return Observable.of(expenseDetail);
  }

  create(detail: ExpenseDetail): Observable<ExpenseDetail> {
    let details: ExpenseDetail[] = JSON.parse(localStorage.gasto_detalle); 
    let newDetail: ExpenseDetail = detail;    

    newDetail.id = (new Date()).getTime();
    details.push(newDetail);
    localStorage.setItem('gasto_detalle', JSON.stringify(details));
    
    return Observable.of(newDetail);
  }

}