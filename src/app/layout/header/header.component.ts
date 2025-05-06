import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;

  // Enlaces del menú
  menuLinks = [
    { text: 'Inicio', route: '/' },
    { text: 'Servicios', route: '/services' },
    { text: 'Cómo Funciona', route: '/how-it-works' },
    { text: 'Tarifas', route: '/rates' },
    { text: 'Rastreo', route: '/tracking' },
    { text: 'Contacto', route: '/contact' },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Detecta el scroll para cambiar la apariencia del header
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  // Alterna el menú móvil
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
