import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { Student } from 'src/models/student';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public ticketForm: FormGroup;

  public MAJOR_LIST: string[] = ['SI', 'GE', 'GB', 'GP', 'GQ', 'GS', 'GT'];
  // make a student list with student from student mocked
  public STUDENT_LIST: Student[] = [
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

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService) {
    // Form creation
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentId: ['']
    });
    // You can also add validators to your inputs such as required, maxlength or even create your own validator!
    // More information: https://angular.io/guide/reactive-forms#simple-form-validation
    // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
  }

  ngOnInit() {
  }

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
    ticketToCreate.archived = false;
    // get student from student list
    ticketToCreate.student = this.STUDENT_LIST.find(student => student.id === ticketToCreate.student.id);
    this.ticketService.addTicket(ticketToCreate);
  }

}
