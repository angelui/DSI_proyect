import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Doctores } from '../models/doctores.model';

@Injectable()
export class DoctoresService{

    private doctoresRef=this.db.list<Doctores>('AsobolFirebase');

    constructor(private db:AngularFireDatabase){
    }

    addDoctor(value: Doctores){
        return this.doctoresRef.push(value);
    }

    getDoctores(){
        return this.doctoresRef;
    }
}