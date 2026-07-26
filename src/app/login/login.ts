import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/\S/)]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      Validators.pattern(/\S/)
    ])
  })
  willLogin = false;
  isUser = true;

  login() {
    if (this.userform.get("email")?.value === "admin@me.com" && this.userform.get("password")?.value === "Access@2026") {
      this.willLogin = true
      this.isUser = true;
      console.log('Login success')
    } else {
      this.willLogin = false;
      this.isUser = false;
      console.log('Login failed')
    }
  }
}
