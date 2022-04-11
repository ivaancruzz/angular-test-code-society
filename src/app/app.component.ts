import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ModelTarifa } from './model/tarifa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    tarifas!: Array<ModelTarifa> //The compiler understands that this variable, although not defined at compile time, shall be defined at run-time, and in time, before it is being used.


    constructor( private data:DataService ){}

    getTarifas(){
      //Get data from service
      this.tarifas = this.data.getData()
      return this.tarifas
    }

    valueResponse( objTarifa:ModelTarifa ){
      alert(`Tarifa #${objTarifa.tarifa_id} | Detalles en consola`)
      console.log( objTarifa )
    }
}
