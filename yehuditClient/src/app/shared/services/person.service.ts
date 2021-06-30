import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  person: Person;
  url = environment.base_url + "Person";

  constructor(public httpClient: HttpClient) { }

  //Adding new person data to the database.
  add(person: Person): Observable<boolean> {
    return this.httpClient.post<boolean>(this.url, person);
  }
}
