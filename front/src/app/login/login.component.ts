import { Component } from '@angular/core';

@Component({
  selector: 'login-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = "Risk Manager"
  email = null
  senha = null

  login () {
    alert('alert')
  }
}
