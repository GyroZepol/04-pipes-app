import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino';

  invitacionMapa = { //Map
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural

  clientes: string[] = ['Jose','Pedro','Eduardo','Mike','Roberto']

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona() {
    if(this.genero === 'femenino') {
      this.nombre = 'Randy'
      this.genero = 'masculino'
    } else {
      this.nombre = 'Susana'
      this.genero = 'femenino'
    }
  }

  borrarPersona() {
    this.clientes.pop()
  }

  //Keyvalue Pipe

  persona ={
    nombre: 'Randy',
    edad: 19,
    direccion: 'Ottawa, Canada'
  }

  //Async Pipe

  miObservable = interval(1000); // 0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)

  })
}
