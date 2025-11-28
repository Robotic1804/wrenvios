import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



export interface Testimonial {
  text: string;
  author: string;
  location: string;
  avatar: string;
}

@Component({
    selector: 'app-testimonials',
    imports: [CommonModule, RouterModule],
    templateUrl: './testimonials.component.html',
    styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input() items: Testimonial[] = [];

  // Testimonials data

  public testimonials = [
    {
      text: 'WRENVIOS ha revolucionado la forma en que hago mis compras. Ahora puedo comprar en cualquier tienda de USA sin preocupaciones.',
      author: 'María González',
      location: 'Managua, Nicaragua',
      avatar: 'assets/images/avatar1.jpg',
    },
    {
      text: 'Excelente servicio y precios justos. Mis paquetes siempre llegan en perfecto estado y en el tiempo prometido.',
      author: 'Carlos Bermúdez',
      location: 'León, Nicaragua',
      avatar: 'assets/images/avatar2.jpg',
    },
    {
      text: 'El servicio de compras por encargo es fantástico. Me han ayudado a conseguir productos que no podía encontrar en Nicaragua.',
      author: 'Laura Mendoza',
      location: 'Granada, Nicaragua',
      avatar: 'assets/images/avatar3.jpg',
    },
  ];
}
