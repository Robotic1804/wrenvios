import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faUserPlus, faShoppingCart, faCheckCircle, faCreditCard, faShippingFast, faBoxOpen, faTruck, faBell, faBox, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Step {
  number: number;
  title: string;
  description: string;
  icon: IconProp;
  image: string;
}

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
})
export class HowItWorksComponent implements OnInit {
  // Iconos
  faPlus = faPlus;
  faMinus = faMinus;
  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faUserPlus = faUserPlus;
  faCheckCircle = faCheckCircle;
  faCreditCard = faCreditCard;
  faShippingFast = faShippingFast;
  faBoxOpen = faBoxOpen;
  faTruck = faTruck;
  faBell = faBell;
  faBox = faBox;
  faStarSolid = faStar;

  // Pasos para compras por encargo
  shoppingSteps: Step[] = [
    {
      number: 1,
      title: 'Regístrate',
      description:
        'Crea tu cuenta gratuita en NicaExpress y obtén acceso a todos nuestros servicios.',
      icon: faUserPlus,
      image: 'assets/images/step1.jpg',
    },
    {
      number: 2,
      title: 'Solicita tu compra',
      description:
        'Envíanos los enlaces de los productos que deseas comprar en tiendas de Estados Unidos.',
      icon: faShoppingCart,
      image: 'assets/images/step2.jpg',
    },
    {
      number: 3,
      title: 'Aprueba la cotización',
      description:
        'Te enviaremos una cotización detallada incluyendo el costo de los productos, impuestos y envío.',
      icon:faCheckCircle,
      image: 'assets/images/step3.jpg',
    },
    {
      number: 4,
      title: 'Realiza el pago',
      description:
        'Realiza el pago a través de nuestros métodos seguros (tarjeta, transferencia, efectivo).',
      icon: faCreditCard,
      image: 'assets/images/step4.jpg',
    },
    {
      number: 5,
      title: 'Seguimiento',
      description:
        'Recibe actualizaciones en tiempo real sobre el estado de tu compra y envío.',
      icon: faShippingFast,
      image: 'assets/images/step5.jpg',
    },
    {
      number: 6,
      title: 'Recibe tu compra',
      description:
        'Recibe tus productos en la puerta de tu casa u oficina en Nicaragua.',
      icon: faBoxOpen,
      image: 'assets/images/step6.jpg',
    },
  ];

  // Pasos para envío de paquetes
  shippingSteps: Step[] = [
    {
      number: 1,
      title: 'Regístrate',
      description:
        'Crea tu cuenta gratuita en WREnvios y obtén tu dirección personal en Miami.',
      icon:faUserPlus,
      image: 'assets/images/step1.jpg',
    },
    {
      number: 2,
      title: 'Envía tus compras',
      description:
        'Utiliza tu dirección en Miami para recibir tus compras de tiendas en Estados Unidos.',
      icon:faTruck,
      image: 'assets/images/step7.jpg',
    },
    {
      number: 3,
      title: 'Notificación',
      description:
        'Te notificaremos cuando recibamos tus paquetes en nuestro almacén en Miami.',
      icon:faBell,
      image: 'assets/images/step8.jpg',
    },
    {
      number: 4,
      title: 'Consolidación',
      description:
        'Podemos agrupar varios paquetes en uno solo para reducir costos de envío.',
      icon:faBox,
      image: 'assets/images/step9.jpg',
    },
    {
      number: 5,
      title: 'Pago de envío',
      description:
        'Realiza el pago del envío según el peso y dimensiones de tus paquetes.',
      icon:faCreditCard,
      image: 'assets/images/step4.jpg',
    },
    {
      number: 6,
      title: 'Recibe tu paquete',
      description:
        'Recibe tus paquetes en la puerta de tu casa u oficina en Nicaragua.',
      icon:faBoxOpen,
      image: 'assets/images/step6.jpg',
    },
  ];

  // Preguntas frecuentes
  faqs: FAQ[] = [
    {
      question: '¿Cuánto tiempo tarda en llegar mi paquete?',
      answer:
        'El tiempo de entrega depende del servicio seleccionado. El servicio estándar toma entre 5-7 días hábiles, mientras que el servicio express toma 3-4 días hábiles después de procesado el paquete.',
      isOpen: false,
    },
    {
      question: '¿Qué productos no puedo enviar?',
      answer:
        'No puedes enviar productos perecederos, líquidos inflamables, armas, drogas, medicamentos sin receta, dinero en efectivo, animales vivos, productos falsificados o cualquier artículo prohibido por las leyes de Nicaragua o Estados Unidos.',
      isOpen: false,
    },
    {
      question: '¿Cómo realizo el seguimiento de mi paquete?',
      answer:
        'Puedes realizar el seguimiento de tu paquete a través de nuestra plataforma en línea o aplicación móvil utilizando el número de rastreo que te proporcionamos.',
      isOpen: false,
    },
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer:
        'Aceptamos tarjetas de crédito/débito, PayPal, transferencias bancarias y pago en efectivo en nuestras oficinas.',
      isOpen: false,
    },
    {
      question: '¿Qué hago si mi paquete llega dañado?',
      answer:
        'Todos nuestros envíos incluyen seguro básico. Si tu paquete llega dañado, debes reportarlo dentro de las 24 horas siguientes a la recepción para iniciar el proceso de reclamo.',
      isOpen: false,
    },
    {
      question: '¿Puedo enviar paquetes desde Nicaragua a Estados Unidos?',
      answer:
        'Sí, ofrecemos servicios de envío en ambas direcciones. Puedes traer tus paquetes a nuestra oficina en Managua para enviarlos a Estados Unidos.',
      isOpen: false,
    },
  ];

  // Testimonios
  testimonials = [
    {
      name: 'María González',
      location: 'Managua',
      rating: 5,
      comment:
        'WREnvios me ha facilitado enormemente las compras en línea. Sus tiempos de entrega son excelentes y el servicio al cliente es muy atento.',
    },
    {
      name: 'Carlos Bermúdez',
      location: 'León',
      rating: 4,
      comment:
        'He utilizado el servicio de compras por encargo varias veces y siempre han sido muy profesionales. Recomiendo ampliamente este servicio.',
    },
    {
      name: 'Laura Mendoza',
      location: 'Granada',
      rating: 5,
      comment:
        'La calculadora de envíos es super precisa, y el proceso de seguimiento me permite saber exactamente dónde está mi paquete en todo momento.',
    },
  ];

  // Sección activa (compras o envíos)
  activeSection = 'shopping';

  constructor() {}

  ngOnInit(): void {}

  // Cambiar sección activa
  setActiveSection(section: string): void {
    this.activeSection = section;
  }
}