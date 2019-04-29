import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AjustesPage } from '../ajustes/ajustes';
import { Datos } from '../../models/datos.model';
import { DatosService } from '../../services/datos-service';
import { PacientesService } from '../../services/pacientes-service';

/**
 * Generated class for the EstadisticasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estadisticas',
  templateUrl: 'estadisticas.html',
})
export class EstadisticasPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  email: string;
  datos: Datos[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private DatosService: DatosService, private PacientesPage:PacientesService) {
    this.email = this.PacientesPage.email;
    this.getDatos()
  }

  printChart() {
    //this.datos = this.DatosService.getDatos();
    console.log('ionViewDidLoad EstadisticasPage');
    console.log(this.getAzucar(this.datos));
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
              {
                  label: "Glucemia",
                  fill: false,
                  lineTension: 0.2,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.getAzucar(this.datos),
                  spanGaps: false,
              }
          ]
      }
    });
  }

  ajustes(){
    this.navCtrl.push(AjustesPage);
  }

  getDatos(){
    this.DatosService.getDatos().snapshotChanges().subscribe(item =>{
      this.datos = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key
        let y = x as Datos
        if(y.email == this.email) this.datos.push(x as Datos);
      })
      this.printChart();
    });
  }

  getAzucar(datos: Datos[]){
    let azucarArray: number[] = [];
    datos.forEach(dato => {
      console.log(dato.azucar);
      azucarArray.push(dato.azucar);
    });
    return azucarArray;
  }
}
