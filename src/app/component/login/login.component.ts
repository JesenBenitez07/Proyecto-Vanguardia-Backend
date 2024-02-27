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
    // Aquí puedes implementar la lógica para realizar el inicio de sesión
    console.log('Iniciando sesión con:', this.email, this.password);
  }

  redirectToRegister() {
    // Aquí puedes implementar la lógica para redirigir al usuario a la página de registro
    console.log('Redireccionando al usuario a la página de registro');
  }
}
