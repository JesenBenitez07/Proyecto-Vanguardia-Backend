export class Empleo{
  _idempleo?:number;
  puesto: string;
  descripcion: string;
  company: string;
  ubicacion: string;
  fecha: Date;

  constructor( puesto: string, descripcion: string, company: string, ubicacion: string, fecha: Date){
    this.puesto = puesto;
    this.descripcion = descripcion;
    this.company =company;
    this.ubicacion = ubicacion;
    this.fecha = fecha;
    }
}
