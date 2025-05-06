// src/app/core/services/shipping.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

// Interfaces para el servicio
export interface ShippingRate {
  id: string;
  origin: string;
  destination: string;
  service: string;
  rate_per_lb: number;
  min_weight: number;
  max_weight: number;
  estimated_days: number;
}

export interface ShippingCalculation {
  subtotal: number;
  taxes: number;
  insurance: number;
  total: number;
  estimated_delivery: string;
}

export interface TrackingInfo {
  tracking_number: string;
  status: string;
  origin: string;
  destination: string;
  service: string;
  weight: string;
  dimensions: string;
  estimated_delivery: string;
  events: TrackingEvent[];
}

export interface TrackingEvent {
  date: string;
  location: string;
  status: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  private apiUrl = environment.apiUrl;

  // Mock data para usar mientras no hay backend
  private mockRates: ShippingRate[] = [
    {
      id: '1',
      origin: 'miami',
      destination: 'managua',
      service: 'standard',
      rate_per_lb: 5.5,
      min_weight: 0.1,
      max_weight: 100,
      estimated_days: 5,
    },
    {
      id: '2',
      origin: 'miami',
      destination: 'managua',
      service: 'express',
      rate_per_lb: 8.75,
      min_weight: 0.1,
      max_weight: 50,
      estimated_days: 3,
    },
    {
      id: '3',
      origin: 'newyork',
      destination: 'managua',
      service: 'standard',
      rate_per_lb: 6.25,
      min_weight: 0.1,
      max_weight: 100,
      estimated_days: 6,
    },
  ];

  private mockTracking: TrackingInfo = {
    tracking_number: 'NE1234567890US',
    status: 'En tránsito',
    origin: 'Miami, FL',
    destination: 'Managua, Nicaragua',
    service: 'Envío Estándar',
    weight: '2.5 kg',
    dimensions: '30 x 20 x 15 cm',
    estimated_delivery: '12/05/2025',
    events: [
      {
        date: '26/04/2025 09:15',
        location: 'Miami, FL',
        status: 'Procesado',
        description: 'Paquete recibido en almacén y procesado',
      },
      {
        date: '27/04/2025 14:30',
        location: 'Miami, FL',
        status: 'En preparación',
        description: 'Paquete preparado para envío internacional',
      },
      {
        date: '28/04/2025 08:45',
        location: 'Miami, FL',
        status: 'En tránsito',
        description: 'Paquete ha salido de la instalación de origen',
      },
      {
        date: '29/04/2025 16:20',
        location: 'Aduana Internacional',
        status: 'En aduana',
        description: 'Paquete en proceso de revisión aduanera',
      },
    ],
  };

  constructor(private http: HttpClient) {}

  /**
   * Obtiene las tarifas de envío disponibles
   */
  getRates(): Observable<ShippingRate[]> {
    // En un entorno real, esto sería una petición HTTP
    // return this.http.get<ShippingRate[]>(`${this.apiUrl}/rates`)
    //   .pipe(catchError(this.handleError));

    // Mock respuesta
    return of(this.mockRates).pipe(delay(800));
  }

  /**
   * Calcula el costo de un envío
   */
  calculateShipping(
    origin: string,
    destination: string,
    weight: number,
    service?: string
  ): Observable<ShippingCalculation> {
    // En un entorno real, esto sería una petición HTTP
    // return this.http.post<ShippingCalculation>(`${this.apiUrl}/calculate`, {
    //   origin,
    //   destination,
    //   weight,
    //   service
    // }).pipe(catchError(this.handleError));

    // Mock cálculo
    return of(this.mockRates).pipe(
      delay(1000),
      map((rates) => {
        // Buscar la tarifa correspondiente
        let rate = rates.find(
          (r) =>
            r.origin === origin &&
            r.destination === destination &&
            (service ? r.service === service : true)
        );

        if (!rate) {
          throw new Error(
            'No se encontró una tarifa para los parámetros especificados'
          );
        }

        // Calcular costos
        const subtotal = weight * rate.rate_per_lb;
        const taxes = subtotal * 0.15; // 15% de impuestos
        const insurance = subtotal * 0.05; // 5% de seguro
        const total = subtotal + taxes + insurance;

        // Calcular fecha estimada de entrega
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + rate.estimated_days);
        const estimatedDelivery = currentDate.toLocaleDateString();

        return {
          subtotal,
          taxes,
          insurance,
          total,
          estimated_delivery: estimatedDelivery,
        };
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Obtiene información de seguimiento de un paquete
   */
  trackPackage(trackingNumber: string): Observable<TrackingInfo | null> {
    // En un entorno real, esto sería una petición HTTP
    // return this.http.get<TrackingInfo>(`${this.apiUrl}/track/${trackingNumber}`)
    //   .pipe(catchError(this.handleError));

    // Mock respuesta
    return of(
      trackingNumber === this.mockTracking.tracking_number
        ? this.mockTracking
        : null
    ).pipe(delay(1500));
  }

  /**
   * Manejo de errores HTTP
   */
  private handleError(error: any) {
    console.error('Error en ShippingService:', error);

    let errorMessage =
      'Ocurrió un error en el servidor. Por favor intenta nuevamente.';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else if (error.status) {
      // Error del lado del servidor
      switch (error.status) {
        case 404:
          errorMessage = 'El recurso solicitado no fue encontrado.';
          break;
        case 403:
          errorMessage = 'No tienes permiso para acceder a este recurso.';
          break;
        case 401:
          errorMessage = 'Sesión expirada. Por favor inicia sesión nuevamente.';
          break;
      }
    }

    return throwError(errorMessage);
  }
}
