import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/models/person';
import { PersonService } from 'src/app/shared/services/person.service';
import { HMOService } from 'src/app/shared/services/hmo.service';
import { HMO } from 'src/app/shared/models/HMO';
import { ChildPerson } from 'src/app/shared/models/childPerson';
import { Router } from '@angular/router';
import { ExportService } from 'src/app/shared/services/export.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrls: ['./form-person.component.scss']
})
export class FormPersonComponent implements OnInit {

  bornDate: any;
  hmoList: HMO[] = [];
  personDetails: any[] = [];
  today = this.datepipe.transform(Date.now(), 'yyyy-mm-dd');

  constructor(public personService: PersonService,
    public HMOService: HMOService,
    public router: Router, public exportService: ExportService, public datepipe: DatePipe) { }

  //Retrieves data from the HMO table
  ngOnInit(): void {
    this.HMOService.getAll().subscribe(res => {
      this.hmoList = res;
    });
  }


  //Submitting form data to the database
  register() {
    this.personService.add(this.personService.person).subscribe(res => {
      if (res == true) {
        this.AllData()
        alert("ok");
        this.personService.person = new Person();
        this.router.navigate([""]);
      }
      else alert("error");
    })
  }

  //Deleting the current child from the child list
  remove(index) {
    this.personService.person.children.splice(index, 1);
  }

  //Adds a new child to the children's list
  add() {
    this.personService.person.children.push(new ChildPerson());
  }

  //Navigation to the instruction page
  enter() {
    this.router.navigate(['']);
  }

  AllData() {
    this.personDetails.push({
      Tz: this.personService.person.tz, firstName: this.personService.person.firstName, lastName: this.personService.person.lastName,
      bornDate: this.personService.person.bornDate, gender: this.personService.person.gender, hmoId: this.personService.person.HMOId, numberOfChildren: this.personService.person.children.length
    });

    for (let i = 0; i < this.personService.person.children.length; i++) {
      this.personDetails.push({
        TzChild: this.personService.person.children[i].tz, NameCild: this.personService.person.children[i].name, bornDateCild: this.personService.person.children[i].bornDate
      });
    }
    this.export();
  }

  export() {
    this.exportService.exportExcel(this.personDetails, `details of "${ this.personService.person.firstName }"`);
  }

}

