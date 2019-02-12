import { Announcement } from './announcement';

export const ANNOUNCEMENTS: Announcement[] = [
  // Add the next announcement here.
  {
    category: 'announcements',
    date: new Date('Feb 9, 2019'),
    title: 'New Pig and Shrub website coming soon',
    desc: 'WIP'
  },
  {
    category: 'announcements',
    date: new Date('August 13, 2016'),
    title: 'Map-A-Trail',
    desc: 'Map your route and share it with others. All you need is your GPX file.'
  },
  {
    category: 'announcements',
    date: new Date('August 8, 2016'),
    title: 'Boids Lab',
    desc: 'A practical application of Craig Reynold\'s Boids model for computerized animal motion.'
  }
];
