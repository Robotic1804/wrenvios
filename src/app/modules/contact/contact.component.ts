// src/app/modules/contact/contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isSubmitted = false;
  isLoading = false;
  formSuccess = false;
  formError = false;
  errorMessage = '';

  // Opciones para el formulario
  subjects = [
    { value: 'general', label: 'Consulta General' },
    { value: 'quote', label: 'Solicitar Cotización' },
    { value: 'tracking', label: 'Seguimiento de Paquete' },
    { value: 'complaint', label: 'Reclamo' },
    { value: 'other', label: 'Otro' },
  ];

  // Ubicaciones de oficinas
  offices = [
    {
      country: 'Nicaragua',
      locations: [
        {
          name: 'Oficina Managua',
          address: 'Centro Comercial Managua, Local 45, Managua, Nicaragua',
          phone: '+505 2222-3333',
          email: 'managua@nicaexpress.com',
          hours:
            'Lunes a Viernes: 8:00 AM - 5:00 PM | Sábados: 9:00 AM - 1:00 PM',
          map: 'https://maps.google.com/maps?q=Centro+Comercial+Managua',
        },
        {
          name: 'Oficina León',
          address: 'Calle Real, Edificio Torres, 2do Piso, León, Nicaragua',
          phone: '+505 2311-2222',
          email: 'leon@nicaexpress.com',
          hours: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
          map: 'https://maps.google.com/maps?q=Leon+Nicaragua',
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
          email: 'miami@nicaexpress.com',
          hours:
            'Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 10:00 AM - 2:00 PM',
          map: 'https://maps.google.com/maps?q=Miami,FL',
        },
      ],
    },
  ];

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

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

  // Comprueba si un campo es inválido y ha sido tocado
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return control
      ? control.invalid && (control.dirty || control.touched)
      : false;
  }

  // Envía el formulario de contacto
  submitForm(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      this.isLoading = true;

      // Aquí iría la lógica para enviar el formulario al servidor
      // En este caso, simulamos una respuesta del servidor
      setTimeout(() => {
        this.isLoading = false;

        // Simulación de éxito (en un caso real, esto dependería de la respuesta del servidor)
        const success = Math.random() > 0.2; // 80% de probabilidad de éxito

        if (success) {
          this.formSuccess = true;
          this.contactForm.reset({
            subject: 'general',
          });
          this.isSubmitted = false;
        } else {
          this.formError = true;
          this.errorMessage =
            'Hubo un problema al enviar el formulario. Por favor intenta nuevamente.';
        }

        // Reset después de un tiempo
        setTimeout(() => {
          this.formSuccess = false;
          this.formError = false;
        }, 5000);
      }, 1500);
    } else {
      // Marca todos los campos como tocados para mostrar errores
      Object.keys(this.contactForm.controls).forEach((key) => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }

  // Reset del formulario
  resetForm(): void {
    this.contactForm.reset({
      subject: 'general',
    });
    this.isSubmitted = false;
    this.formSuccess = false;
    this.formError = false;
  }

  // Muestra el campo de tracking number solo para ciertos asuntos
  showTrackingField(): boolean {
    const subject = this.contactForm.get('subject')?.value;
    return subject === 'tracking' || subject === 'complaint';
  }
}
