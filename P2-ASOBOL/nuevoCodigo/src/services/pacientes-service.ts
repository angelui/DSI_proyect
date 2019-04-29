import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pacientes } from '../models/pacientes.model';

@Injectable()
export class PacientesService{
    
    private pacientesRef=this.db.list<Pacientes>('AsobolFirebase/pacientes');

    constructor(private db:AngularFireDatabase){
    }

    addPaciente(value: Pacientes){
        return this.pacientesRef.push(value);
    }

    getPacientes(){
        return this.pacientesRef;
    }
}