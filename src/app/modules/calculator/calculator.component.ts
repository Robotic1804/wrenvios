import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  ShippingService,
  ShippingCalculation,
  ShippingRate,
} from '../../core/services/shipping.service';
import { finalize } from 'rxjs/operators';
import { faCheckCircle, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-calculator',
    imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule, HttpClientModule],
    providers: [],
    templateUrl: './calculator.component.html',
    styleUrl: './calculator.component.scss'
})
export class CalculatorComponent implements OnInit {
  faSpinner = faSpinner;
  faCheckCircle = faCheckCircle;
  faExclamation = faExclamation;
  // Variables para el formulario
  calculatorForm: FormGroup;
  isLoading = false;
  isCalculated = false;
  calculation: ShippingCalculation | null = null;
  errorMessage = '';
 

  // Opciones para el formulario
  origins = [
    { value: 'miami', label: 'Miami, FL' },
    { value: 'newyork', label: 'New York, NY' },
  ];

  destinations = [
    { value: 'managua', label: 'Managua' },
    { value: 'leon', label: 'León' },
    { value: 'granada', label: 'Granada' },
  ];

  services = [
    { value: 'standard', label: 'Estándar (5-7 días)' },
    { value: 'express', label: 'Express (3-4 días)' },
  ];

  packageTypes = [
    { value: 'package', label: 'Paquete' },
    { value: 'document', label: 'Documento' },
    { value: 'fragile', label: 'Paquete Frágil' },
  ];

  constructor(
    private fb: FormBuilder,
    private shippingService: ShippingService
  ) {
    this.calculatorForm = this.fb.group({
      origin: ['miami', Validators.required],
      destination: ['managua', Validators.required],
      packageType: ['package', Validators.required],
      service: ['standard', Validators.required],
      weight: [
        1,
        [Validators.required, Validators.min(0.1), Validators.max(100)],
      ],
      length: [10, [Validators.required, Validators.min(1)]],
      width: [10, [Validators.required, Validators.min(1)]],
      height: [10, [Validators.required, Validators.min(1)]],
      value: [0, [Validators.min(0)]],
      insurance: [false],
    });
  }

  ngOnInit(): void {}

  /**
   * Calcula el costo de envío
   */
  calculateShipping(): void {
    if(this.calculatorForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.isCalculated = false;

      const formData = this.calculatorForm.value;

      this.shippingService
        .calculateShipping(
          formData.origin,
          formData.destination,
          formData.weight,
          formData.service
        )
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          (result) => {
            this.calculation = result;
            this.isCalculated = true;
          },
          (error) => {
            this.errorMessage = error;
          }
        );
    } else {
      this.markFormGroupTouched(this.calculatorForm);
    }
  }

  /**
   * Marca todos los controles como tocados para mostrar errores de validación
   */
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  /**
   * Verifica si un control es inválido y ha sido tocado
   */
  isInvalidAndTouched(controlName: string): boolean {
    const control = this.calculatorForm.get(controlName);
    return control ? control.invalid && control.touched : false;
  }

  /**
   * Resetea el formulario
   */
  resetForm(): void {
    this.calculatorForm.reset({
      origin: 'miami',
      destination: 'managua',
      packageType: 'package',
      service: 'standard',
      weight: 1,
      length: 10,
      width: 10,
      height: 10,
      value: 0,
      insurance: false,
    });
    this.isCalculated = false;
    this.calculation = null;
    this.errorMessage = '';
  }
}

