import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'randy naranjo'
  nombreUpper: string = 'RANDY NARANJO'
  nombreCompleto: string = 'RanDy nAranJo'

  fecha: Date = new Date(); //el dia de hoy
  
}
