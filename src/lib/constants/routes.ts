export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  ABOUT: '/about',
  CONTACT: '/contact',
  CUSTOM: '/custom',
  SERVICES: '/services',
  PORTFOLIO: '/portfolio',
  CONSULTATION: '/consultation',
  PRIVATE_COLLECTION: '/private-collection',
  
  // Authentication
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  
  // Admin
  ADMIN: {
    DASHBOARD: '/admin',
    ORDERS: '/admin/orders',
    CUSTOMERS: '/admin/customers',
    INVENTORY: '/admin/inventory',
    SETTINGS: '/admin/settings',
  }
} as const;