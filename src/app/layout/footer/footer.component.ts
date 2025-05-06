import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  // Año actual para el copyright
  currentYear = new Date().getFullYear();

  // Enlaces de navegación
  navLinks = [
    { text: 'Inicio', route: '/' },
    { text: 'Servicios', route: '/services' },
    { text: 'Cómo Funciona', route: '/how-it-works' },
    { text: 'Tarifas', route: '/rates' },
    { text: 'Rastreo', route: '/tracking' },
    { text: 'Contacto', route: '/contact' },
  ];

  // Enlaces de servicios
  serviceLinks = [
    { text: 'Compras por Encargo', route: '/services/shopping' },
    { text: 'Envío de Paquetes', route: '/services/shipping' },
    { text: 'Consolidación', route: '/services/consolidation' },
    { text: 'Almacenamiento', route: '/services/storage' },
    { text: 'Seguro de Envíos', route: '/services/insurance' },
  ];

  // Enlaces legales
  legalLinks = [
    { text: 'Términos y Condiciones', route: '/legal/terms' },
    { text: 'Política de Privacidad', route: '/legal/privacy' },
    { text: 'Política de Cookies', route: '/legal/cookies' },
    { text: 'Política de Reembolsos', route: '/legal/refunds' },
  ];

  // Redes sociales
  socialLinks = [
    { icon: 'facebook-f', url: 'https://facebook.com/' },
    { icon: 'instagram', url: 'https://instagram.com/' },
    { icon: 'twitter', url: 'https://twitter.com/' },
    { icon: 'youtube', url: 'https://youtube.com/' },
    { icon: 'whatsapp', url: 'https://wa.me/123456789' },
  ];

  constructor() {}

  ngOnInit(): void {}
}