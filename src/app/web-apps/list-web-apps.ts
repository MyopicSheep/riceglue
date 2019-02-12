import { WebApp } from './web-app';

export const WEBAPPS: WebApp[] = [
  /** Insert next app here **/
  {
    category: 'apps', type: 'web',
    date: new Date('August 13, 2016'),
    title: 'Map-A-Trail',
    url: 'https://github.com/pigandshrub/mapatrail',
    desc: 'Use your GPX file to share your tracks, waypoints, and routes with family and friends.',
    image: '../assets/web-apps/mapatrail.png'
  },
  {
    category: 'apps', type: 'web',
    date: new Date('August 8, 2016'),
    title: 'Boids Lab',
    url: 'https://pigandshrub.github.io/mini-boids-lab/',
    desc: 'Gaze at the moving particles and try to predict their next move - it\'s not as easy as it looks.',
    image: '../assets/web-apps/boidslab.png'
  }
];
