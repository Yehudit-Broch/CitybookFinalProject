import { Component, OnInit, Input } from '@angular/core';
import { ChildPerson } from 'src/app/shared/models/childPerson';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-child-person',
  templateUrl: './child-person.component.html',
  styleUrls: ['./child-person.component.scss']
})
export class ChildPersonComponent implements OnInit {

  today = this.datepipe.transform(Date.now(), 'yyyy-mm-dd');

  @Input() childP: ChildPerson = new ChildPerson();
  @Input() index: number = 0;

  constructor(public datepipe:DatePipe) {}

  ngOnInit(): void {
  }

}
