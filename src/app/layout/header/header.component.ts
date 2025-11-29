import { CommonModule } from '@angular/common';
import type { OnInit} from '@angular/core';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark, faTimes  } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule, FaIconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  // Iconos de FontAwesome
  faBars = faBars;
  faXmark = faXmark;
  faTimes = faTimes;
  // Propiedades para el menú móvil y el scroll
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
