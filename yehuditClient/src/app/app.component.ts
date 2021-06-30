import { Component, OnInit } from '@angular/core';
import { PersonService } from './shared/services/person.service';
import { Person } from './shared/models/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public personService: PersonService) {
    personService.person = new Person();
  }

  title = 'yehuditClient';
  
}
