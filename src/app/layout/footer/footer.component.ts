import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';


interface SocialLink {
  url: string;
  icon: IconProp; // <- aquí
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  // Iconos de FontAwesome
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faWhatsapp = faWhatsapp;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
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
  socialLinks: SocialLink[] = [
    {
      url: 'https://www.facebook.com/profile.php?id=61553766538623',
      icon: faFacebook,
    },
    { url: 'https://twitter.com', icon: faTwitter },
    {
      url: 'https://www.instagram.com/wr_envios/?fbclid=IwY2xjawKI1bFleHRuA2FlbQIxMABicmlkETFXdkk1UEFBUFBidHVkZmVKAR6kksMRX4RZd6dDCnOQltfvuEbP90GSpsHxSuEzyCvrZeeSjZR1W5MFbfzQiA_aem_78oXvS6AgJ46DwtD5idFHA#',
      icon: faInstagram,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}