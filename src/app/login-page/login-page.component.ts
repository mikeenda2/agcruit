import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Here, you can handle the form submission, perform authentication, and navigate the user to another page if login is successful.
    if (this.username === 'yourUsername' && this.password === 'yourPassword') {
      // Successful login, you can perform navigation here.
    } else {
      // Display an error message or handle failed login.
    }
  }
}
