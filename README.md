# WRENVIOS - Delivery & Logistics Platform

![Angular](https://img.shields.io/badge/Angular-20.3.14-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

A modern delivery and logistics management platform built with Angular 20 and Server-Side Rendering (SSR).

---

## Technology Stack

### Core
- **Angular** 20.3.14 - Frontend framework with standalone components
- **TypeScript** 5.8.3 - Type-safe JavaScript
- **Angular SSR** - Server-Side Rendering with Express.js
- **RxJS** 7.8.0 - Reactive programming

### UI/UX
- **Bootstrap** 5.3.5 - Responsive CSS framework
- **FontAwesome** 6.7.2 - Icon library
- **ngx-toastr** 19.0.0 - Toast notifications

### Code Quality
- **ESLint** 9.39.1 - Code linting
- **@angular-eslint** 21.0.1 - Angular-specific linting rules
- **@typescript-eslint** 8.48.0 - TypeScript linting

### Testing
- **Jasmine** 5.1.0 - Testing framework
- **Karma** 6.4.0 - Test runner

---

## Features

### ✅ Implemented

- **📦 Shipping Calculator** - Calculate shipping costs based on origin, destination, weight, and service type
- **🔍 Package Tracking** - Track package status interface
- **📞 Contact Form** - Contact page for customer inquiries
- **ℹ️ Information Pages** - Services, How It Works, Home with testimonials
- **👤 User Management UI** - Login, Register, and Profile pages
- **🔐 Route Guards** - Auth and Admin guards (placeholder implementation)
- **⚡ Lazy Loading** - Admin module with lazy loading
- **📱 Responsive Design** - Mobile-first approach with Bootstrap
- **🚀 SSR Support** - Server-Side Rendering for better SEO and performance
- **🎨 Modern UI** - Clean interface with FontAwesome icons

### 🚧 Planned

- Backend API integration
- Real authentication system
- Database integration
- Payment gateway
- Real-time tracking with GPS
- Admin dashboard functionality

---

## Project Structure

```
envios-app/
├── src/
│   ├── app/
│   │   ├── components/           # Shared components
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   ├── profile/
│   │   │   └── not-found/
│   │   ├── core/                 # Core functionality
│   │   │   ├── guards/           # Route guards
│   │   │   ├── models/           # Data models
│   │   │   └── services/         # Business logic services
│   │   ├── layout/               # Layout components
│   │   │   ├── header/
│   │   │   └── footer/
│   │   ├── modules/              # Feature modules
│   │   │   ├── admin/            # Admin module (lazy loaded)
│   │   │   ├── calculator/       # Shipping calculator
│   │   │   ├── contact/          # Contact page
│   │   │   ├── home/             # Homepage
│   │   │   ├── how-it-works/     # How it works page
│   │   │   ├── services/         # Services page
│   │   │   ├── testimonials/     # Testimonials
│   │   │   └── tracking/         # Package tracking
│   │   ├── shared/               # Shared utilities
│   │   │   └── pipes/            # Custom pipes
│   │   ├── app.component.ts      # Root component
│   │   ├── app.config.ts         # App configuration
│   │   ├── app.config.server.ts  # SSR configuration
│   │   └── app.routes.ts         # Route definitions
│   ├── main.ts                   # Client bootstrap
│   ├── main.server.ts            # Server bootstrap
│   └── styles.scss               # Global styles
├── server.ts                     # Express SSR server
├── eslint.config.mjs             # ESLint configuration
├── tsconfig.json                 # TypeScript configuration
├── angular.json                  # Angular workspace configuration
└── package.json                  # Dependencies

```

---

## Prerequisites

- **Node.js** v18+
- **npm** v9+
- **Angular CLI** v20+

---

## Installation

**1. Clone the repository**
```bash
git clone https://github.com/Robotic1804/wrenvios.git
cd wrenvios/envios-app
```

**2. Install dependencies**
```bash
npm install
```

---

## Development

### Start development server
```bash
npm start
# or
ng serve
```
Navigate to `http://localhost:4200`

### Start SSR development server
```bash
npm run serve:ssr:envios-app
```

### Watch mode
```bash
npm run watch
```

---

## Code Quality

### Run ESLint
```bash
npm run lint
```

### Auto-fix ESLint issues
```bash
npm run lint:fix
```

---

## Testing

### Run unit tests
```bash
npm test
# or
ng test
```

### Run tests with coverage
```bash
ng test --code-coverage
```

---

## Build

### Production build (Client-side)
```bash
npm run build
# or
ng build
```

### Production build with SSR
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

---

## ESLint Configuration

The project uses ESLint with the following plugins:
- `@angular-eslint` - Angular-specific rules
- `@typescript-eslint` - TypeScript rules
- `eslint-plugin-import` - Import/export validation

**Key rules enforced:**
- Component/Directive naming conventions
- Import ordering
- No unused variables
- Type safety
- Code quality standards

---

## Architecture Highlights

### Standalone Components
All components use Angular's standalone component architecture (no NgModules except for lazy-loaded features).

### Server-Side Rendering (SSR)
- Express.js server for SSR
- Improved SEO and initial load performance
- Separate configurations for client and server

### Lazy Loading
- Admin module is lazy-loaded for better performance
- Route-based code splitting

### Route Guards
- `authGuard` - Protects authenticated routes
- `adminGuard` - Protects admin routes
- Currently placeholder implementations (return true)

---

## Routes

| Path | Component | Guard | Description |
|------|-----------|-------|-------------|
| `/` | Home | - | Homepage with features |
| `/services` | Services | - | Services overview |
| `/how-it-works` | HowItWorks | - | Process explanation |
| `/calculator` | Calculator | - | Shipping cost calculator |
| `/tracking` | Tracking | - | Package tracking |
| `/contact` | Contact | - | Contact form |
| `/login` | Login | - | User login |
| `/register` | Register | - | User registration |
| `/profile` | Profile | authGuard | User profile |
| `/admin/*` | Admin Module | adminGuard | Admin dashboard (lazy) |
| `/**` | NotFound | - | 404 page |

---

## Environment Configuration

The application uses Angular's environment configuration:
- `environment.ts` - Development environment
- `environment.prod.ts` - Production environment

---

## Scripts Reference

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run watch` | Build in watch mode |
| `npm run serve:ssr:envios-app` | Start SSR server |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Run linting: `npm run lint`
5. Run tests: `npm test`
6. Commit with descriptive message
7. Push to your branch
8. Create a Pull Request

---

## Roadmap

### Phase 1 - Backend Integration
- [ ] REST API development
- [ ] Database setup (MySQL/PostgreSQL)
- [ ] JWT authentication
- [ ] User management

### Phase 2 - Core Features
- [ ] Real package tracking
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Admin dashboard functionality

### Phase 3 - Advanced Features
- [ ] Real-time GPS tracking
- [ ] Mobile app (React Native/Flutter)
- [ ] Analytics dashboard
- [ ] Multi-language support

---

## Contact & Support

| Channel | Link |
|---------|------|
| Email | norman-navarro@webdesigner.com |
| LinkedIn | [norm-frontend-developer](https://www.linkedin.com/in/norm-frontend-developer/) |
| Portfolio | [www.norman-webdesigner.com](https://www.norman-webdesigner.com) |

---

## License

This project is licensed under the MIT License.

---

## Changelog

### v0.0.0 - Current
- Initial Angular 20 setup with SSR
- Shipping calculator implementation
- Tracking interface
- Contact, Services, and How It Works pages
- Login/Register/Profile UI
- Admin module with lazy loading
- ESLint configuration
- Bootstrap 5 integration
- FontAwesome icons
- Responsive design

---

**Built with ❤️ by [Norman Navarro](https://www.linkedin.com/in/norm-frontend-developer/) | Frontend Developer**

---

<div align="center">

If you found this project helpful, please give it a ⭐ star!

</div>
