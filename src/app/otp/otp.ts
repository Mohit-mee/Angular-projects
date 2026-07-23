import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MaxValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class Otp {
  userform = new FormGroup({
    num: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  })
  numValue: string = "";
  phoneValue: string = '';
  isCorrect = false;
  isSent = false;

  otp() {
    if (this.phoneValue == '1234') {
      this.isCorrect = true;
      console.log("true")
    }
  }
  otpsent() {
    console.log("otp sent")
    this.isSent = true;
    this.numValue = '';
  }
}
