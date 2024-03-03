import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  usuarioForm: FormGroup;
  title = 'Registro de Usuario';
  iduser: string | null;
userForm: any;

  constructor(private fb: FormBuilder, private router: Router, private _userService: UserService, private aRouter: ActivatedRoute) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.iduser = this.aRouter.snapshot.paramMap.get('iduser');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addUsuario() {
    const USER: User = {
      nombre: this.userForm.get('nombre')?.value,
      apellido: this.userForm.get('apellido')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
    }
    //Verificar existe el usuario
    if (this.iduser !== null) {

    } else {
      //no existe el usuario se crea
      console.log(USER);
      this._userService.saveUser(USER).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }
}
