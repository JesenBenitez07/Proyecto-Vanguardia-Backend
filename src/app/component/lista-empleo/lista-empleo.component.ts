import { Component, OnInit } from '@angular/core';
import { Empleo } from 'src/app/model/empleo';
import { EmpleoService } from 'src/app/services/empleo.service';

@Component({
  selector: 'app-lista-empleo',
  templateUrl: './lista-empleo.component.html',
  styleUrls: ['./lista-empleo.component.css']
})
export class ListaEmpleoComponent implements OnInit {
  listaempleo: Empleo[] = [];

  constructor(private _empleoService: EmpleoService) { }

  ngOnInit(): void {
    this.getEmpleos();
  }

  getEmpleos() {
    this._empleoService.getEmpleos().subscribe(data => {
      console.log(data);
      this.listaempleo = data;
    }, error => {
      console.log(error);
    })
  }

  deleteEmpleo(idempleo: any){
    this._empleoService.deleteEmpleo(idempleo).subscribe(data => {
      this.getEmpleos();
    }, error => {
      console.log(error)
    })
  }

}
