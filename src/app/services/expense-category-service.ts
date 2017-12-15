import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ExpenseCategory } from '../models/expense-category';

@Injectable()
export class ExpenseCategoryService {  

    constructor() { 
        
    }

    public list(): Observable<ExpenseCategory[]> {
        let categories;
        categories = JSON.parse(localStorage.gasto_categorias);
        
        categories.map((categoria) => {
            categoria.sumdetails = 0;
            this.getDetailsByCategory(categoria.id).map((detail)=>{
                categoria.sumdetails = categoria.sumdetails + detail.costo;
            });
        });

        return Observable.of(categories);
    }

    private getDetailsByCategory(categoryId): any[]{
        let subcategorias = JSON.parse(localStorage.gasto_subcategorias);
        let detalles = JSON.parse(localStorage.gasto_detalle);

        detalles = detalles.map(function(detalle, index, array){
            detalle.subcategoria = subcategorias.find(subcategoria => {
                return subcategoria.id == detalle.gasto_subcategorias_id
            });
            return detalle;
        });

        detalles = detalles.filter(function(detalle){
            return detalle.subcategoria.gasto_categorias_id == categoryId;
        });

        return detalles;
    }

}