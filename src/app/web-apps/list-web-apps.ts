import { WebApp } from './web-app';

export const WEBAPPS: WebApp[] = [
  /** Insert next app here **/
  {
    category: 'apps', type: 'web',
    date: new Date('August 8, 2016'),
    title: 'Boids Lab',
    url: 'https://boidslab.riceglue.com',
    desc: 'Gaze at the moving particles and try to predict their next move - it\'s not as easy as it looks.',
    image: '../assets/web-apps/boidslab.png'
  }
];
