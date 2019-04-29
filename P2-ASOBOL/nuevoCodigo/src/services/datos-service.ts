import { Datos } from '../models/datos.model'
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class DatosService{
    
    /*private datos: Datos[] = 
    [{"fecha":"1","hora":"1","azucar":1,"hemoglobina":1,"ud_pan":1,"peso":1,"pulso":1,"sistolica":1,"diastolica":1,"notas":"njpwienvlejv\nkoevnwepov"},
    {"fecha":"2","hora":"2","azucar":2,"hemoglobina":2,"ud_pan":2,"peso":2,"pulso":2,"sistolica":2,"diastolica":2,"notas":"njpwienvlejv\nkoevnwepov"}];
    */

    private datosRef=this.db.list<Datos>('AsobolFirebase/datos');
    selectDato: Datos = new Datos();
    constructor(private db:AngularFireDatabase){

    
    }

    addDato(value: Datos){
        //this.datos.push(value);
        return this.datosRef.push(value);
    }

    getDatos(){
          
        //return this.datos;
        return this.datosRef;
    }

    updateDato(value: Datos){
        //return this.datosRef.update(value.key, value);
    }

    removeDato(value: Datos){
        //return this.datosRef.remove(value.key);
    }
}