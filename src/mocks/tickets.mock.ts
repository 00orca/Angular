import { Major, Ticket } from '../models/ticket';

const dateToday: Date = new Date();

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: 'Paul',
    major: Major.SI,
    archived: false
  },
  {
    title: 'SI5 test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: Major.SI,
    archived: false
  },
  {
    title: 'GE test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: Major.GE,
    archived: false
  },
  {
    title: 'GB test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: Major.GB,
    archived: true
  },
  {
    title: 'Archived test',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Willhem',
    major: Major.GB,
    archived: true
  },
];
