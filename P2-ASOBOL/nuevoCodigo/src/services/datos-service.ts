import { Datos } from '../models/datos.model'
import { Injectable } from '@angular/core';

@Injectable()
export class DatosService{
    public datos: Datos[] = [{"fecha":"1","hora":"1","azucar":1,"hemoglobina":1,"peso":1,"pulso":1,"sistolica":1,"diastolica":1,"notas":"njpwienvlejv\nkoevnwepov"},
    {"fecha":"2","hora":"2","azucar":2,"hemoglobina":2,"peso":2,"pulso":2,"sistolica":2,"diastolica":2,"notas":"njpwienvlejv\nkoevnwepov"}];
  
    constructor(){
        
    }

    getDatos(){
        return this.datos;
    }
}