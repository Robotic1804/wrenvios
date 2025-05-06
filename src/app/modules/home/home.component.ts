import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  // Stats data
  public stats = [
    { number: '15,000+', text: 'Clientes Satisfechos' },
    { number: '98%', text: 'Entregas a Tiempo' },
    { number: '50,000+', text: 'Paquetes Entregados' },
    { number: '5', text: 'Años de Experiencia' },
  ];

  // Testimonials data
  public testimonials = [
    {
      text: 'NicaExpress ha revolucionado la forma en que hago mis compras. Ahora puedo comprar en cualquier tienda de USA sin preocupaciones.',
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

  // Services data
  public services = [
    {
      title: 'Compras por Encargo',
      description:
        'Te ayudamos a comprar cualquier producto de tiendas en Estados Unidos y lo enviamos directamente a tu puerta en Nicaragua.',
      icon: 'shopping-cart',
      link: '/services/shopping',
    },
    {
      title: 'Envío de Paquetes',
      description:
        'Recibe tu dirección personal en Miami y envía tus paquetes desde Estados Unidos a Nicaragua con total seguridad.',
      icon: 'box',
      link: '/services/shipping',
    },
  ];

  // Form model for the calculator
  public calculatorForm = {
    service: 'package',
    origin: 'miami',
    destination: 'managua',
    weight: 1,
  };

  constructor() {}

  ngOnInit(): void {}

  // Calculate shipping cost (dummy function, would be connected to a real service)
  calculateShipping(): void {
    // In a real app, this would call your shipping service
    alert(
      `Calculando costos para: ${this.calculatorForm.weight}lb desde ${this.calculatorForm.origin} a ${this.calculatorForm.destination}`
    );
  }
}