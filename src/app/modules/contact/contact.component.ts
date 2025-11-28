// src/app/modules/contact/contact.component.ts
import { CommonModule,  } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import type {
  FormBuilder,
  FormGroup} from '@angular/forms';
import {
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import type { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faDirections } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faExclamation, faSpinner } from '@fortawesome/free-solid-svg-icons';


interface Office {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  map: string;
}


interface CountryOffices {
  country: string;
  locations: Office[];
}


@Component({
    selector: 'app-contact',
    imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // Iconos de FontAwesome
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faClock = faClock;
  faDirections = faDirections;
  faWhatsapp = faWhatsapp;

  // Iconos (para autocompletar en TS si quieres)
  faCheckCircle = faCheckCircle;
  faExclamation = faExclamation;
  faSpinner = faSpinner;
  /// Variables del formulario
  contactForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  formSuccess = false;
  formError = false;
  errorMessage = '';

  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) {
    this.createForm();
  }

  // Opciones para el formulario
  subjects = [
    { value: 'general', label: 'Consulta General' },
    { value: 'quote', label: 'Solicitar Cotización' },
    { value: 'tracking', label: 'Seguimiento de Paquete' },
    { value: 'complaint', label: 'Reclamo' },
    { value: 'other', label: 'Otro' },
  ];
  sanitizedOffices: {
    name: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    map: string;
    safeMapUrl: SafeResourceUrl;
  }[] = [];

  // Ubicaciones de oficinas
  offices: CountryOffices[] = [
    {
      country: 'Nicaragua',
      locations: [
        {
          name: 'Oficina Managua',
          address:
            'Ubicación: De la rotonda el Guegüense 500 mts al Oeste (Colectivo Áres), Managua, Nicaragua',
          phone: '+505 5812 9621',
          email: 'wriossevilla@gmail.com',
          hours:
            'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 9:00 AM - 1:00 PM',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.69014998653!2d-80.23253262426857!3d25.801293508480674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a91d4ad8af%3A0x7459ef51f7f881bd!2s123%20NW%2023rd%20St%2C%20Miami%2C%20FL%2033127%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1715626686592!5m2!1ses!2sni',
        },
      ],
    },
    {
      country: 'Estados Unidos',
      locations: [
        {
          name: 'Oficina Miami',
          address: '123 NW 23rd St, Miami, FL 33127, Estados Unidos',
          phone: '+1 (305) 123-4567',
          email: 'wriossevilla@gmail.com',
          hours:
            'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 10:00 AM - 2:00 PM',
          map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.69014998653!2d-80.23253262426857!3d25.801293508480674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b6a91d4ad8af%3A0x7459ef51f7f881bd!2s123%20NW%2023rd%20St%2C%20Miami%2C%20FL%2033127%2C%20EE.%20UU.!5e0!3m2!1ses!2sni!4v1715626686592!5m2!1ses!2sni',
        },
      ],
    },
  ];

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]],
      subject: ['', Validators.required],
      trackingNumber: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Crea el formulario con validaciones
  createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^\+?[0-9\s\-\(\)]+$/)],
      ],
      subject: ['general', Validators.required],
      trackingNumber: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  /** Marca inválidos y touched para mostrar estilos de error */
  isInvalidAndTouched(field: string): boolean {
    const ctl = this.contactForm.get(field);
    return !!(ctl && ctl.invalid && (ctl.touched || ctl.dirty));
  }

  /** Muestra el campo de rastreo si el asunto es 'tracking' */
  showTrackingField(): boolean {
    return this.contactForm.get('subject')?.value === 'tracking';
  }

  /** Maneja el envío del formulario */
  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.formError = false;
    this.formSuccess = false;

    // Simulación de llamada a un API
    setTimeout(() => {
      this.isLoading = false;
      this.formSuccess = true;
      this.contactForm.reset();
    }, 2000);
  }

  /** Limpia formulario y mensajes */
  resetForm() {
    this.contactForm.reset();
    this.formError = false;
    this.formSuccess = false;
  }

  /** Sanitiza URLs para iframes */
  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openDirections(address: string): void {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      '_blank'
    );
  }
}

    


 

