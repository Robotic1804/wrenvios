import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';





// Interfaz para los estados del paquete
interface TrackingStatus {
  date: string;
  location: string;
  status: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
}

@Component({
  selector: 'app-tracking',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],

  templateUrl: './tracking.component.html',
  styleUrl: './tracking.component.scss',
 
})
export class TrackingComponent implements OnInit {
  trackingForm: FormGroup;
  isSearched = false;
  isLoading = false;
  trackingNumber = '';
  packageFound = false;
  faSpinner = faSpinner;

  // Datos simulados del paquete
  packageData = {
    trackingNumber: 'NE1234567890US',
    origin: 'Miami, FL',
    destination: 'Managua, Nicaragua',
    service: 'Envío Estándar',
    weight: '2.5 kg',
    dimensions: '30 x 20 x 15 cm',
    estimatedDelivery: '12/05/2025',
    status: 'En tránsito',
  };

  // Estados de seguimiento simulados
  trackingStatuses: TrackingStatus[] = [
    {
      date: '26/04/2025 09:15',
      location: 'Miami, FL',
      status: 'Procesado',
      description: 'Paquete recibido en almacén y procesado',
      isCompleted: true,
      isActive: false,
    },
    {
      date: '27/04/2025 14:30',
      location: 'Miami, FL',
      status: 'En preparación',
      description: 'Paquete preparado para envío internacional',
      isCompleted: true,
      isActive: false,
    },
    {
      date: '28/04/2025 08:45',
      location: 'Miami, FL',
      status: 'En tránsito',
      description: 'Paquete ha salido de la instalación de origen',
      isCompleted: true,
      isActive: false,
    },
    {
      date: '29/04/2025 16:20',
      location: 'Aduana Internacional',
      status: 'En aduana',
      description: 'Paquete en proceso de revisión aduanera',
      isCompleted: false,
      isActive: true,
    },
    {
      date: 'Pendiente',
      location: 'Managua, Nicaragua',
      status: 'En distribución',
      description: 'Paquete en ruta para entrega local',
      isCompleted: false,
      isActive: false,
    },
    {
      date: 'Pendiente',
      location: 'Managua, Nicaragua',
      status: 'Entregado',
      description: 'Paquete entregado al destinatario',
      isCompleted: false,
      isActive: false,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.trackingForm = this.fb.group({
      trackingNumber: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  // Método para realizar la búsqueda del paquete
  searchPackage(): void {
    if (this.trackingForm.valid) {
      this.isLoading = true;
      this.trackingNumber = this.trackingForm.get('trackingNumber')?.value;

      // Simulamos una llamada a API con setTimeout
      setTimeout(() => {
        this.isLoading = false;
        this.isSearched = true;

        // Simulamos que encontramos el paquete si el número de tracking coincide
        this.packageFound = this.trackingNumber === 'NE1234567890US';
      }, 1500);
    }
  }
}