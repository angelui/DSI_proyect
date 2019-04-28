
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pacientes } from '../models/pacientes.model';

@Injectable()
export class PacientesService{
    
    /*private datos: Datos[] = 
    [{"fecha":"1","hora":"1","azucar":1,"hemoglobina":1,"ud_pan":1,"peso":1,"pulso":1,"sistolica":1,"diastolica":1,"notas":"njpwienvlejv\nkoevnwepov"},
    {"fecha":"2","hora":"2","azucar":2,"hemoglobina":2,"ud_pan":2,"peso":2,"pulso":2,"sistolica":2,"diastolica":2,"notas":"njpwienvlejv\nkoevnwepov"}];
    */

    private pacientesRef=this.db.list<Pacientes>('AsobolFirebase');

    constructor(private db:AngularFireDatabase){
    }

    addPaciente(value: Pacientes){
        //this.datos.push(value);
        return this.pacientesRef.push(value);
    }

    getPacientes(){
        //return this.datos;
        return this.pacientesRef;
    }

    /*updatePaciente(value: Pacientes){
        //return this.datosRef.update(value.key, value);
    }

    removePaciente(value: Pacientes){
        //return this.datosRef.remove(value.key);
    }*/
}