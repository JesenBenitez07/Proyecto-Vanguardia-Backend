import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  title = 'Login';
userForm: any;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  errorMensaje: string = '';
  login() {
    if (this.loginForm.valid) {
      const credenciales = this.loginForm.value;

      this.loginService.login(credenciales)
        .pipe(
          tap(
            response => {
              // Manejar la respuesta exitosa del backend
              console.log('Login exitoso:', response);
              this.router.navigate(['/header']);
            },
            error => {
              // Manejar errores
              console.error('Error en el login:', error);
              this.errorMensaje = 'Error en el inicio de sesión. Verifica tus credenciales e intenta nuevamente.';

            }
          ),
          tap(() => {
            // Restablecer el formulario después de la operación
            this.loginForm.reset();
          })
        )
        .subscribe();
    }
  }
}
