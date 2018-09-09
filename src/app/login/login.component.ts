import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  data: any = {}
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formLogin = new FormGroup({
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    const data = this.formLogin.value;
    if (data.email && data.password) {
      this.loginService.post(data).subscribe(
        response => {
          this.data = response;
          localStorage.setItem('id_token', this.data.token);
          this.router.navigate(['/students'])
        },
        error => {
          console.log('gagal');
          console.log(error);
        }
      );
    }
  }

}
