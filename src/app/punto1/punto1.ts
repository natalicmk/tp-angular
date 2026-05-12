import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto1',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './punto1.html',
  styleUrl: './punto1.css',
})
export class Punto1 {

  eventos = [
    {
      nombre: 'Yoga',
      descripcion: 'Clase de relajación y estiramiento',
      img: 'evento01.jpg'
    },
    {
      nombre: 'Crossfit',
      descripcion: 'Entrenamiento intenso',
      img: 'evento02.jpg'
    },
    {
      nombre: 'Zumba',
      descripcion: 'Baile divertido para ejercitar',
      img: 'evento03.jpg'
    }
  ];

  indice = 0;

  siguiente() {
    if (this.indice < this.eventos.length - 1) {
      this.indice++;
    }
  }

  anterior() {
    if (this.indice > 0) {
      this.indice--;
    }
  }

}