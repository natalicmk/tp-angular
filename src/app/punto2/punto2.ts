import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-punto2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './punto2.html',
  styleUrl: './punto2.css'
})
export class Punto2 {

  productos = [
    {
      nombre: 'Auriculares gamer',
      descripcion: 'RGB con micrófono',
      img: 'producto1.jpg',
      precio: 450000
    },
    {
      nombre: 'Auriculares rosados',
      descripcion: 'Full HD',
      img: 'producto2.jpg',
      precio: 220000
    },
    {
      nombre: 'Auriculares Logitech',
      descripcion: 'RGB inalámbrico',
      img: 'producto3.jpg',
      precio: 35000
    }
  ];

  carrito: any[] = [];

  agregarCarrito(producto: any) {
    this.carrito.push(producto);
  }
  eliminarProducto(indice: number) {
    this.carrito.splice(indice, 1);
  }
  
  total() {
    let suma = 0;

    for (let producto of this.carrito) {
      suma += producto.precio;
    }

    return suma;
  }

}