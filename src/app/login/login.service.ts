import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  post(data) {
    return this.httpClient.post('http://localhost:3333/api/auth/login', data);
  }

  

}
