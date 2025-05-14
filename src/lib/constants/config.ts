export const SITE_CONFIG = {
  name: 'Sculptify',
  description: 'Hyper-Realistic 3D Printed Luxury Statues',
  url: 'https://sculptify.com',
  ogImage: 'https://sculptify.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/sculptify',
    instagram: 'https://instagram.com/sculptify',
  },
} as const;

export const CONTACT_CONFIG = {
  email: 'concierge@sculptify.com',
  phone: '+1 (888) SCULPT-LUX',
  address: '888 Royal Avenue, New York, NY 10001',
  hours: 'By Appointment Only',
} as const;

export const CONSULTATION_CONFIG = {
  duration: 60, // minutes
  locations: [
    'New York',
    'London',
    'Dubai',
    'Hong Kong',
    'Singapore',
    'Monaco',
  ],
  types: [
    'Private Consultation',
    'Virtual Meeting',
    'On-Site Visit',
    'Design Workshop',
  ],
} as const;