import { CommonModule } from '@angular/common';
import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import type { ActivatedRoute } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCreditCard, faShoppingBag, faShieldAlt, faHandHoldingDollar, faHeadset, faTruck, faMapMarkedAlt, faBox, faSearch, faClock, faFileInvoice, faInfoCircle, faWineBottle, faPills, faCheck, faSkullCrossbones, faPaw, faBomb,faCopy, faCannabis, faMoneyBill1Wave, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';




interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended: boolean;
}


@Component({
    selector: 'app-services',
    imports: [CommonModule, FontAwesomeModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  // Iconos de FontAwesome
  faCreditCard = faCreditCard;
  faShoppingBag = faShoppingBag;
  faShieldAlt = faShieldAlt;
  faHandHoldingDollar = faHandHoldingDollar;
  faHeadset = faHeadset;
  faTruck = faTruck;
  faMapMarkedAlt = faMapMarkedAlt;
  faBox = faBox;
  faSearch = faSearch;
  faClock = faClock;
  faFileInvoice = faFileInvoice;
  faInfoCircle = faInfoCircle;
  faWineBottle = faWineBottle;
  faPills = faPills;
  faCheck = faCheck;
  faSkullCrossbones = faSkullCrossbones;
  faPaw = faPaw;
  faBomb = faBomb;
  faCopy = faCopy;
  faCannabis = faCannabis;
  faMoneyBill1Wave = faMoneyBill1Wave;
  faExclamationTriangle = faExclamationTriangle;
  

  getIconByName(iconName: string) {
    const iconMap: { [key: string]: any } = {
      'credit-card': this.faCreditCard,
      'shopping-bag': this.faShoppingBag,
      'shield-alt': this.faShieldAlt,
      'hand-holding-usd': this.faHandHoldingDollar,
      headset: this.faHeadset,
      truck: this.faTruck,
      'map-marker-alt': this.faMapMarkedAlt,
      box: this.faBox,
      search: this.faSearch,
      clock: this.faClock,
      'file-invoice': this.faFileInvoice,
      'info-circle': this.faInfoCircle,
      'map-marked-alt': this.faMapMarkedAlt,
      'wine-bottle': this.faWineBottle,
      pills: this.faPills,
    };

    return iconMap[iconName] || this.faSearch; // Icono por defecto si no se encuentra
  }

  activeService = 'shopping';

  // Beneficios de compras por encargo
  shoppingBenefits: Benefit[] = [
    {
      icon: 'credit-card',
      title: 'Mejores Precios',
      description:
        'Accede a precios exclusivos y ofertas especiales disponibles solo en Estados Unidos.',
    },
    {
      icon: 'shopping-bag',
      title: 'Más Variedad',
      description:
        'Encuentra productos que no están disponibles en Nicaragua o tienen opciones limitadas.',
    },
    {
      icon: 'shield-alt',
      title: 'Productos Originales',
      description:
        'Garantía de compra de productos 100% originales y auténticos.',
    },
    {
      icon: 'hand-holding-usd',
      title: 'Sin Tarjeta Internacional',
      description:
        'No necesitas tener tarjeta de crédito internacional para comprar en tiendas de USA.',
    },
    {
      icon: 'headset',
      title: 'Asesoría Personalizada',
      description:
        'Te ayudamos a encontrar los mejores productos al mejor precio.',
    },
    {
      icon: 'truck',
      title: 'Entrega a Domicilio',
      description:
        'Entregamos tus compras directamente en la puerta de tu casa u oficina.',
    },
  ];

  // Beneficios de envío de paquetes
  shippingBenefits: Benefit[] = [
    {
      icon: 'map-marker-alt',
      title: 'Dirección en Miami',
      description:
        'Obtén una dirección personal en Miami para recibir tus compras.',
    },
    {
      icon: 'box',
      title: 'Consolidación de Paquetes',
      description:
        'Ahorra en costos de envío agrupando varios paquetes en uno solo.',
    },
    {
      icon: 'shield-alt',
      title: 'Seguro de Envío',
      description: 'Protección contra pérdidas o daños durante el transporte.',
    },
    {
      icon: 'search',
      title: 'Rastreo en Tiempo Real',
      description:
        'Sigue el estado de tu paquete en todo momento a través de nuestra plataforma.',
    },
    {
      icon: 'clock',
      title: 'Tiempos de Entrega Rápidos',
      description:
        'Entregas en 3-7 días dependiendo del servicio seleccionado.',
    },
    {
      icon: 'file-invoice',
      title: 'Gestión Aduanera',
      description: 'Nos encargamos de todos los trámites aduaneros necesarios.',
    },
  ];

  // Tiendas populares para compras por encargo
  popularStores = [
    {
      name: 'Amazon',
      logo: 'assets/images/stores/amazon.png',
      url: 'https://www.amazon.com',
    },
    {
      name: 'Walmart',
      logo: 'assets/images/stores/walmart.png',
      url: 'https://www.walmart.com',
    },
    {
      name: 'Best Buy',
      logo: 'assets/images/stores/bestbuy.png',
      url: 'https://www.bestbuy.com',
    },
    {
      name: 'Target',
      logo: 'assets/images/stores/target.png',
      url: 'https://www.target.com',
    },
    {
      name: "Macy's",
      logo: 'assets/images/stores/macys.png',
      url: 'https://www.macys.com',
    },
    {
      name: 'eBay',
      logo: 'assets/images/stores/ebay.png',
      url: 'https://www.ebay.com',
    },
    {
      name: 'Costco',
      logo: 'assets/images/stores/costco.png',
      url: 'https://www.costco.com',
    },
    {
      name: 'Home Depot',
      logo: 'assets/images/stores/homedepot.png',
      url: 'https://www.homedepot.com',
    },
  ];

  // Precios y planes
  shoppingPricing: PricingTier[] = [
    {
      name: 'Básico',
      price: '10%',
      description: 'Servicio de compra por encargo estándar',
      features: [
        'Comisión del 10% sobre el valor de la compra',
        'Tiempo de procesamiento de 48 horas',
        'Envío estándar (5-7 días)',
        'Soporte por email',
      ],
      recommended: false,
    },
    {
      name: 'Premium',
      price: '15%',
      description: 'El más popular para compras frecuentes',
      features: [
        'Comisión del 15% sobre el valor de la compra',
        'Tiempo de procesamiento de 24 horas',
        'Envío express (3-4 días)',
        'Soporte prioritario 24/7',
        'Seguro incluido (hasta $500)',
        'Consolidación de paquetes gratis',
      ],
      recommended: true,
    },
    {
      name: 'Empresarial',
      price: 'Consultar',
      description: 'Para empresas y compradores mayoristas',
      features: [
        'Comisión personalizada según volumen',
        'Ejecutivo de cuenta dedicado',
        'Almacenamiento gratuito por 30 días',
        'Envíos programados',
        'Facturación mensual',
        'Seguro completo incluido',
      ],
      recommended: false,
    },
  ];

  shippingPricing: PricingTier[] = [
    {
      name: 'Estándar',
      price: '$5.50/lb',
      description: 'Para envíos no urgentes',
      features: [
        'Tarifa base de $5.50 por libra',
        'Tiempo de entrega de 5-7 días',
        'Rastreo básico',
        'Seguro básico incluido (hasta $100)',
      ],
      recommended: false,
    },
    {
      name: 'Express',
      price: '$8.75/lb',
      description: 'Nuestro servicio más popular',
      features: [
        'Tarifa base de $8.75 por libra',
        'Tiempo de entrega de 3-4 días',
        'Rastreo en tiempo real',
        'Seguro incluido (hasta $300)',
        'Notificaciones SMS',
        'Atención prioritaria',
      ],
      recommended: true,
    },
    {
      name: 'Empresarial',
      price: 'Consultar',
      description: 'Para envíos frecuentes y empresas',
      features: [
        'Tarifas personalizadas según volumen',
        'Tiempos de entrega garantizados',
        'Recolección a domicilio',
        'Reportes mensuales de envíos',
        'Facturación mensual',
        'Ejecutivo de cuenta dedicado',
      ],
      recommended: false,
    },
  ];

  // Categorías populares para compras
  popularCategories = [
    {
      name: 'Electrónica',
      icon: 'laptop',
      description: 'Laptops, celulares, tablets y accesorios',
    },
    {
      name: 'Ropa y Calzado',
      icon: 'tshirt',
      description: 'Marcas exclusivas a precios accesibles',
    },
    {
      name: 'Hogar',
      icon: 'home',
      description: 'Decoración, muebles y electrodomésticos',
    },
    {
      name: 'Belleza',
      icon: 'spa',
      description: 'Cosméticos, perfumes y cuidado personal',
    },
    {
      name: 'Juguetes',
      icon: 'gamepad',
      description: 'Juguetes educativos y de entretenimiento',
    },
    {
      name: 'Deportes',
      icon: 'running',
      description: 'Equipos y ropa deportiva de alta calidad',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Verificar si hay un parámetro de servicio en la URL
    this.route.params.subscribe((params) => {
      if (params['type']) {
        this.activeService = params['type'];
      }
    });
  }

  // Cambiar el servicio activo
  setActiveService(service: string): void {
    this.activeService = service;
  }

  // Obtener los beneficios del servicio activo
  get activeBenefits():Benefit[] {
    return this.activeService === 'shopping'
      ? this.shoppingBenefits
      : this.shippingBenefits;
  }

  // Obtener los precios del servicio activo
  get activePricing():PricingTier[] {
    return this.activeService === 'shopping'
      ? this.shoppingPricing
      : this.shippingPricing;
  }
}