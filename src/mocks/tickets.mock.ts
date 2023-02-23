import { Major, Ticket } from '../models/ticket';
import { Student } from '../models/student';

const dateToday: Date = new Date();

export const STUDENTS_MOCKED: Student[] = [
  {
    id: 1,
    firstName: 'Paul',
    lastName: 'Dupont'
  },
  {
    id: 2,
    firstName: 'Jean-Yves',
    lastName: 'Delmotte'
  },
  {
    id: 3,
    firstName: 'Remi',
    lastName: 'Pourtier'
  }
];

export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Madrid',
    description: '',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.SI,
    archived: false
  },
  {
    title: 'SI5 test',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[1],
    major: Major.SI,
    archived: false
  },
  {
    title: 'GE test',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[2],
    major: Major.GE,
    archived: false
  },
  {
    title: 'GB test',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.GB,
    archived: true
  },
  {
    title: 'Archived test',
    description: 'Description du voyage',
    date: dateToday,
    student: STUDENTS_MOCKED[0],
    major: Major.GB,
    archived: true
  },
];
