import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto3.html',
  styleUrl: './punto3.css'
})

export class Punto3 {

  cartas: any[] = [];

  seleccionadas: any[] = [];

  intentos = 10;

  iniciado = false;

  imagenes = [
    'carta1.jpg',
    'carta2.jpg',
    'carta3.jpg',
    'carta4.jpg',
    'carta5.jpg',
    'carta6.jpg'
  ];

  iniciarJuego() {

    this.cartas = [];

    this.seleccionadas = [];

    this.intentos = 10;

    this.iniciado = true;

    let pares = [...this.imagenes, ...this.imagenes];

    pares.sort(() => Math.random() - 0.5);

    for (let img of pares) {

      this.cartas.push({
        imagen: img,
        visible: false,
        encontrada: false
      });

    }

  }

  reiniciarJuego() {

    this.iniciarJuego();

  }

  seleccionarCarta(carta: any) {

    if (!this.iniciado) return;

    if (carta.visible || carta.encontrada) return;

    if (this.seleccionadas.length == 2) return;

    carta.visible = true;

    this.seleccionadas.push(carta);

    if (this.seleccionadas.length == 2) {

      setTimeout(() => {

        let c1 = this.seleccionadas[0];
        let c2 = this.seleccionadas[1];

        if (c1.imagen == c2.imagen) {

          c1.encontrada = true;
          c2.encontrada = true;

        } else {

          c1.visible = false;
          c2.visible = false;

          this.intentos--;

        }

        this.seleccionadas = [];

      }, 1000);

    }

  }

}