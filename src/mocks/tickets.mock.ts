import { Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: 'SI'
  },
  {
    title: 'SI5 test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: 'SI'
  },
  {
    title: 'GE test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: 'GE'
  },
  {
    title: 'GB test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: 'GB'
  },
];
