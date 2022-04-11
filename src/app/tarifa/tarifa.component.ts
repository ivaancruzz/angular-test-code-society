import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { ModelTarifa } from '../model/tarifa';


@Component({
  selector: 'Tarifa[tarifa_object]',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class Tarifa {
  @Input() tarifa_object!: ModelTarifa //The compiler understands that this variable, although not defined at compile time, shall be defined at run-time, and in time, before it is being used.
  @Output() onClick: EventEmitter<ModelTarifa> = new EventEmitter()
  
  show(){
    this.onClick.emit( this.tarifa_object )
  }
}
