import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../env';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getPesticides() {
    return this.http
      .get(`${API_URL}/getPesticides`);
  }

  apiPesticide(pesticideid){
    return this.http
      .get(`${API_URL}/pesticides/`+ pesticideid);
  }

  apiPostUser(userObj){
    return this.http
      .post(`${API_URL}/postUser`, userObj);
  }

  apiGetUser(userEmail){
    return this.http
      .get(`${API_URL}/users/`+ userEmail);
  }
}
