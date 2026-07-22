import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.pattern(/^(?:\+91[-\s]?)?[6-9]\d{9}$/)])
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted successfully:', this.userForm.value);
      this.userForm.reset()
    }
  }
}
