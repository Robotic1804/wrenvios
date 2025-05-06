import { Component, OnInit } from '@angular/core';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {

  // Pasos para compras por encargo
  shoppingSteps: Step[] = [
    {
      number: 1,
      title: 'Regístrate',
      description: 'Crea tu cuenta gratuita en NicaExpress y obtén acceso a todos nuestros servicios.',
      icon: 'user-plus',
      image: 'assets/images/step1.jpg'
    },
    {
      number: 2,
      title: 'Solicita tu compra',
      description: 'Envíanos los enlaces de los productos que deseas comprar en tiendas de Estados Unidos.',
      icon: 'shopping-cart',
      image: 'assets/images/step2.jpg'
    },
    {
      number: 3,
      title: 'Aprueba la cotización',
      description: 'Te enviaremos una cotización detallada incluyendo el costo de los productos, impuestos y envío.',
      icon: 'check-circle',
      image: 'assets/images/step3.jpg'
    },
    {
      number: 4,
      title: 'Realiza el pago',
      description: 'Realiza el pago a través de nuestros métodos seguros (tarjeta, transferencia, efectivo).',
      icon: 'credit-card',
      image: 'assets/images/step4.jpg'
    },
    {
      number: 5,
      title: 'Seguimiento',
      description: 'Recibe actualizaciones en tiempo real sobre el estado de tu compra y envío.',
      icon: 'shipping-fast',
      image: 'assets/images/step5.jpg'
    },
    {
      number: 6,
      title: 'Recibe tu compra',
      description: 'Recibe tus productos en la puerta de tu casa u oficina en Nicaragua.',
      icon: 'box-open',
      image: 'assets/images/step6.jpg'
    }
  ];

  // Pasos para envío de paquetes
  shippingSteps: Step[] = [
    {
      number: 1,
      title: 'Regístrate',
      description: 'Crea tu cuenta gratuita en NicaExpress y obtén tu dirección personal en Miami.',
      icon: 'user-plus',
      image: 'assets/images/step1.jpg'
    },
    {
      number: 2,
      title: 'Envía tus compras',
      description: 'Utiliza tu dirección en Miami para recibir tus compras de tiendas en Estados Unidos.',
      icon: 'truck',
      image: 'assets/images/step7.jpg'
    },
    {
      number: 3,
      title: 'Notificación',
      description: 'Te notificaremos cuando recibamos tus paquetes en nuestro almacén en Miami.',
      icon: 'bell',
      image: 'assets/images/step8.jpg'
    },
    {
      number: 4,
      title: 'Consolidación',
      description: 'Podemos agrupar varios paquetes en uno solo para reducir costos de envío.',
      icon: 'box',
      image: 'assets/images/step9.jpg'
    },
    {
      number: 5,
      title: 'Pago de envío',
      description: 'Realiza el pago del envío según el peso y dimensiones de tus paquetes.',
      icon: 'credit-card',
      image: 'assets/images/step4.jpg'
    },
    {
      number: 6,
      title: 'Recibe tu paquete',
      description: 'Recibe tus paquetes en la puerta de tu casa u oficina en Nicaragua.',
      icon: 'box-open',
      image: 'assets/images/step6.jpg'
    }
  ];

  // Preguntas frecuentes
  faqs = [
    {
      question: '¿Cuánto tiempo tarda en llegar mi paquete?',
      answer: 'El tiempo de entrega depende del servicio seleccionado. El servicio estándar toma entre 5-7 días hábiles, mientras que el servicio express toma 3-4 días hábiles después de procesado el paquete.'
    },
    {
      question: '¿Qué productos no puedo enviar?',
      answer: 'No puedes enviar productos perecederos, líquidos inflamables, armas, drogas, medicamentos sin receta, dinero en efectivo, animales vivos, productos falsificados o cualquier artículo prohibido por las leyes de Nicaragua o Estados Unidos.'
    },
    {
      question: '¿Cómo realizo el seguimiento de mi paquete?',
      answer: 'Puedes realizar el seguimiento de tu paquete a través de nuestra plataforma en línea o aplicación móvil utilizando el número de rastreo que te proporcionamos.'
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y pago en efectivo en nuestras oficinas.'
    },
    {
      question: '¿Qué hago si mi paquete llega dañado?',
      answer: 'Todos nuestros envíos incluyen seguro básico. Si tu paquete llega dañado, debes reportarlo dentro de las 24 horas siguientes a la recepción para iniciar el proceso de reclamo.'
    },
    {
      question: '¿Puedo enviar paquetes desde Nicaragua a Estados Unidos?',
      answer: 'Sí, ofrecemos servicios de envío en ambas direcciones. Puedes traer tus paquetes a nuestra oficina en Managua para enviarlos a Estados Unidos.'
    }
  ];

  // Testimonios
  testimonials = [
    {
      name: 'María González',
      location: 'Managua',
      rating: 5,
      comment: 'NicaExpress me ha facilitado enormemente las compras en línea. Sus tiempos de entrega son excelentes y el servicio al cliente es muy atento.'
    },
    {
      name: 'Carlos Bermúdez',
      location: 'León',
      rating: 4,
      comment: 'He utilizado el servicio de compras por encargo varias veces y siempre han sido muy profesionales. Recomiendo ampliamente este servicio.'
    },
    {
      name: 'Laura Mendoza',
      location: 'Granada',
      rating: 5,
      comment: 'La calculadora de envíos es super precisa, y el proceso de seguimiento me permite saber exactamente dónde está mi paquete en todo momento.'
    }
  ];

  // Sección activa (compras o envíos)
  activeSection = 'shopping';

  constructor() { }

  ngOnInit(): void {
  }

  // Cambiar sección activa
  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}