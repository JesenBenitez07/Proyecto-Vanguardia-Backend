import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstname: string = "";
  lastname: string = "";
  email: string = "";
  password: string = "";


  registerForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Método para manejar el evento de guardar
  save() {
    // Verifica si el formulario es válido antes de continuar
    if (this.registerForm.valid) {
      console.log('Formulario válido. Datos:', this.registerForm.value);

      // Redirige a la página de login después de guardar
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
}
