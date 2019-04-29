import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Pacientes } from '../models/pacientes.model';

@Injectable()
export class PacientesService{
    
    public email:string;
    public doctor:boolean;
    private pacientesRef=this.db.list<Pacientes>('AsobolFirebase/pacientes');

    constructor(private db:AngularFireDatabase){
    }

    addPaciente(value: Pacientes){
        return this.pacientesRef.push(value);
    }

    getPacientes(){
        return this.pacientesRef;
    }

    addEmail(str:string){
        this.email = str;
    }

    

}