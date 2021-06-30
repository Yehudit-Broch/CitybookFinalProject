import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HMO } from '../models/HMO';

@Injectable({
  providedIn: 'root'
})
export class HMOService {

  url = environment.base_url + "HMO";

  constructor(public httpClient: HttpClient) { }

  //Get the HMO list from the database
  getAll(): Observable<HMO[]> {
    return this.httpClient.get<HMO[]>(this.url);
  }
}
