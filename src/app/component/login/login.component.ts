import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ="";
  password: string = "";

  login() {
    console.log('Iniciando sesión con:', this.email, this.password);
  }

  redirectToRegister() {
    console.log('Redireccionando al usuario a la página de registro');
  }
}
