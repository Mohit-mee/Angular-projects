import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-otp',
  imports: [FormsModule],
  templateUrl: './otp.html',
  styleUrl: './otp.css',
})
export class Otp {
  phoneValue: string = '';
  isCorrect = false;

  otp() {
    if (this.phoneValue == '1234') {
      this.isCorrect = true;
      console.log("true")
    }
  }
}
