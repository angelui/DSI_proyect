import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InicioSesionPage } from '../inicio-sesion/inicio-sesion';
import { Pacientes } from '../../models/pacientes.model';
import { PacientesService } from '../../services/pacientes-service';
import { Doctores } from '../../models/doctores.model';
import { DoctoresService } from '../../services/doctores-service';
import { Observable } from 'rxjs/Observable';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  formularioPaciente: FormGroup;
  formularioDoctor: FormGroup;

  public paciente:boolean = true;
  public doctor:boolean = false;

  str: string;
  num: number;

  pacienteValue = {nombre: this.str, apellidos: this.str, correoElectronico: this.str, contrasena: this.str, telefono: this.num, estatura: this.num, peso: this.num, anoNacimiento: this.num};

  doctorValue = {nombre: this.str, apellidos: this.str, correoElectronico: this.str, contrasena: this.str, telefono: this.num, anosExperiencia: this.num, numeroColegiado: this.num, centro: this.str, especialidad: this.str};

  constructor(public navCtrl: NavController, public fb: FormBuilder, public navParams: NavParams, private pacienteService: PacientesService, private doctorService: DoctoresService) {
    this.formularioPaciente = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correoElectronico: ['',[Validators.required, Validators.email]],
      contrasena: ['',[Validators.required]],
      telefono: ['',[Validators.pattern(/^[0-9]{9}$/)]],
      estatura: ['',[Validators.pattern(/^[0-9]{3}$/)]],
      peso: ['',[Validators.pattern(/^[0-9]{3}$/)]],
      anoNacimiento: ['',[Validators.required,Validators.pattern(/^[0-9]{4}$/)]],
    });
    this.formularioDoctor = this.fb.group({
      nombre: ['',[Validators.required]],
      apellidos: ['',[Validators.required]],
      correoElectronico: ['',[Validators.required, Validators.email]],
      contrasena: ['',[Validators.required]],
      telefono: ['',[Validators.pattern(/^[0-9]{9}$/)]],
      anosExperiencia: ['',[Validators.pattern(/^[0-9]{2}$/)]],
      numeroColegiado: ['',[Validators.pattern(/^[0-9]{9}$/)]],
      centro: [''],
      especialidad: ['',[Validators.required]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  actualizarPaciente(){
    console.log(this.paciente);
    if(this.paciente == false){
      this.doctor=true;
      this.paciente=false;
    }
    if(this.paciente == true){
      this.doctor=false;
      this.paciente=true;
    }
  }

  actualizarDoctor(){
    console.log(this.doctor);
    if(this.doctor == false){
      this.doctor=false;
      this.paciente=true;
    }
    if(this.doctor == true){
      this.doctor=true;
      this.paciente=false;
    }
  }

  onAddPaciente(){

    this.pacienteService.addPaciente(this.pacienteValue);
    this.navCtrl.pop();
  }

  onAddDoctor(){
    this.doctorService.addDoctor(this.doctorValue);
    this.navCtrl.pop();
  }
}
