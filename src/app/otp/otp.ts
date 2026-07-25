import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-otp',
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class Otp {
  userform = new FormGroup({
    num: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?:\+91[-\s]?)?[6-9]\d{9}$/),
      Validators.pattern(/\S/)
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4}$/),
      Validators.pattern(/\S/)
    ]),
  })
  isCorrect = false;
  isSent = false;

  otp() {
    if (this.userform.get('phone')?.value === '1234') {
      this.isCorrect = true;
      console.log("true")
    }
  }
  otpsent() {
    console.log("otp sent")
    this.isSent = true;
  }
}
