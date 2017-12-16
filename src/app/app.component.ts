import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ExpenseCategoryPage } from '../pages/expense-category/expense-category';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ExpenseCategoryPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault(); // gives statusBar grey color
      splashScreen.hide();
    });
  
    this.loadData();
  }

  loadData() {
    localStorage.clear();
    let gc = [
        {"id": 1, "nombre": "COTIDIANOS"},
        {"id": 2, "nombre": "RECURRENTES"},
        {"id": 3, "nombre": "OCASIONALES"},
        {"id": 4, "nombre": "ATIPICOS"}
    ];
    let gsc = [
        {"id": 1, "gasto_categorias_id": 1, "gasto_promedio": 100.00, "nombre": "PASAJES"},
        {"id": 2, "gasto_categorias_id": 1, "gasto_promedio": 100.00, "nombre": "ALIMENTACION"},
        {"id": 3, "gasto_categorias_id": 1, "gasto_promedio": 100.00, "nombre": "SNACKS Y BEBIDAS"},
        {"id": 4, "gasto_categorias_id": 2, "gasto_promedio": 100.00, "nombre": "SERVICIO DE INTERNET"},
        {"id": 5, "gasto_categorias_id": 2, "gasto_promedio": 100.00, "nombre": "SERVICIO DE CELULAR"},
        {"id": 6, "gasto_categorias_id": 2, "gasto_promedio": 100.00, "nombre": "SERVICIO DE VIGILANCIA"},
        {"id": 7, "gasto_categorias_id": 2, "gasto_promedio": 100.00, "nombre": "PROPINAS"},
        {"id": 8, "gasto_categorias_id": 3, "gasto_promedio": 100.00, "nombre": "REGALOS"},
        {"id": 9, "gasto_categorias_id": 3, "gasto_promedio": 100.00, "nombre": "BEBIDAS ALCOHOLICAS"},
        {"id": 10, "gasto_categorias_id": 3, "gasto_promedio": 100.00, "nombre": "SALIDAS Y PASEOS"},
        {"id": 11, "gasto_categorias_id": 4, "gasto_promedio": 100.00, "nombre": "COMPRA DE ROPA"},
        {"id": 12, "gasto_categorias_id": 4, "gasto_promedio": 100.00, "nombre": "COMPRA DE ELECTRODOMESTICOS"},
        {"id": 13, "gasto_categorias_id": 4, "gasto_promedio": 100.00, "nombre": "COMPRA DE ARTEFACTOS ELECTRONICOS"},
        {"id": 14, "gasto_categorias_id": 4, "gasto_promedio": 100.00, "nombre": "COMPRA DE ATIPICAS"},
        {"id": 15, "gasto_categorias_id": 4, "gasto_promedio": 100.00, "nombre": "GASTO ATIPICO"}
    ];
    let gd = [
        {
            "id": 1,
            "gasto_subcategorias_id": 1,
            "detalle": "Taxi",
            "costo": 20.00,
            "observacion": "de Pte. nuevo al jockey plaza",
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 2,
            "gasto_subcategorias_id": 2,
            "detalle": "1/4 Pollo a la brasa + bebidas",
            "costo": 25.00,
            "observacion": "Don belisario",
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 3,
            "gasto_subcategorias_id": 6,
            "detalle": "Servicio de vigilancia - Agosto 2017",
            "costo": 25.00,
            "observacion": null,
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 4,
            "gasto_subcategorias_id": 7,
            "detalle": "Semana de mi papá",
            "costo": 150.00,
            "observacion": null,
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 5,
            "gasto_subcategorias_id": 9,
            "detalle": "Chupeta en el local del cumpa",
            "costo": 30.00,
            "observacion": null,
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 6,
            "gasto_subcategorias_id": 11,
            "detalle": "Casaca de vestir",
            "costo": 200.00,
            "observacion": null,
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 7,
            "gasto_subcategorias_id": 15,
            "detalle": "Certificados",
            "costo": 120.00,
            "observacion": "IPCNA y Sistemas Uni",
            "fecha": "2017-12-16T04:20:43.940Z"
        },
        {
            "id": 8,
            "gasto_subcategorias_id": 1,
            "detalle": "Metropolitano",
            "costo": 1.70,
            "observacion": "de jockey plaza al BCP",
            "fecha": "2017-12-16T04:20:43.940Z"
        }
    ];

    localStorage.setItem('gasto_categorias', JSON.stringify(gc));
    localStorage.setItem('gasto_subcategorias', JSON.stringify(gsc));
    localStorage.setItem('gasto_detalle', JSON.stringify(gd));

    // console.log(localStorage)
  }
}