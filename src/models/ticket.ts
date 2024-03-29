import { Student } from "./student";

export enum Major {
  SI = 'SI',
  GE = 'GE',
  GB = 'GB',
  GP = 'GP',
  GQ = 'GQ',
  GS = 'GS',
  GT = 'GT',
}
  
export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}
