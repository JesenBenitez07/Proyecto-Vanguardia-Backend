import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleo } from 'src/app/model/empleo';
import { EmpleoService } from 'src/app/services/empleo.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.component.html',
  styleUrls: ['./empleo.component.css']
})
export class EmpleoComponent implements OnInit  {
  empleoForm: FormGroup;
  title = 'Crear Empleo';
  idempleo: string | null;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService, private _empleoService: EmpleoService, private aRouter: ActivatedRoute) {
    this.empleoForm = this.fb.group({
      puesto: ['', Validators.required],
      descripcion: ['', Validators.required],
      company: ['', Validators.required],
      ubicacion: ['', Validators.required],
      fecha: ['', Validators.required],
    })
    this.idempleo = this.aRouter.snapshot.paramMap.get('idempleo');
  }

  ngOnInit(): void {
    this.Editar();
  }

  cerrarSesion():void{
    this.loginService.cerrarSesion()
    this.router.navigate(['/login'])
  }
  addEmpleo() {

    const EMPLEO: Empleo = {
      puesto: this.empleoForm.get('puesto')?.value,
      descripcion: this.empleoForm.get('descripcion')?.value,
      company: this.empleoForm.get('company')?.value,
      ubicacion: this.empleoForm.get('ubicacion')?.value,
      fecha: this.empleoForm.get('fecha')?.value,
    }
    //Verificar existe el producto
    if (this.idempleo !== null) {
      //existe el producto se edita
      this._empleoService.editEmpleo(this.idempleo, EMPLEO).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.empleoForm.reset();
      })
    } else {
      //no existe el empleo se crea
      console.log(EMPLEO);
      this._empleoService.saveEmpleo(EMPLEO).subscribe(data => {
        this.router.navigate(['/'])
      }, error => {
        console.log(error);
        this.empleoForm.reset();
      })
    }


  }

  Editar() {

    if (this.idempleo !== null) {
      this.title = 'Editar Empleo';
      this._empleoService.getAEmpleo(this.idempleo).subscribe(data => {
        this.empleoForm.setValue({
          puesto: data.puesto,
          descripcion: data.descripcion,
          company: data.company,
          ubicacion: data.ubicacion,
          fecha: data.fecha
        })
      })
    }
  }
}
