import { services } from './services';

export const navigationData = [
  { name: 'Destinations', path: '/destinations', children: [
    { name: 'USA', path: '/destinations/usa' },
    { name: 'Canada', path: '/destinations/canada' },
    { name: 'United Kingdom', path: '/destinations/uk' },
    { name: 'Ireland', path: '/destinations/ireland' },
    { name: 'Australia', path: '/destinations/australia' },
    { name: 'New Zealand', path: '/destinations/new-zealand' },
    { name: 'Europe', path: '/destinations/europe' },
    { name: 'Asia', path: '/destinations/asia' },
  ] },
  { name: 'Universities', path: '/universities' },
  { name: 'Services', path: '/services', children: services.map((service) => ({ name: service.name, path: `/services/${service.slug}` })) },
  { name: 'Company', children: [
    { name: 'About Us', path: '/about' }, { name: 'Careers', path: '/careers' },
  ] },
  { name: 'Contact Us', path: '/contact' },
];
