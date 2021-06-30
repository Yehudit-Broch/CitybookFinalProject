import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/shared/services/person.service';

@Component({
  selector: 'app-enter',
  templateUrl: './enter.component.html',
  styleUrls: ['./enter.component.scss']
})
export class EnterComponent implements OnInit {

  constructor(public router:Router,
    public personSErvice:PersonService) { }

  ngOnInit(): void {
  }

  //Navigation to the form page.
  enter()
  {
    this.router.navigate(["form"]);
  }

}
