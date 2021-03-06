import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';
import { CompartirPage } from '../pages/compartir/compartir';
import { ComunidadAsobolPage } from '../pages/comunidad-asobol/comunidad-asobol';
import { ConocenosPage } from '../pages/conocenos/conocenos';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { ExportarDatosPage } from '../pages/exportar-datos/exportar-datos';
import { HomePage } from '../pages/home/home';
import { IdiomaPage } from '../pages/idioma/idioma';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { MonedasNivelPage } from '../pages/monedas-nivel/monedas-nivel';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { RegistroPage } from '../pages/registro/registro';
import { TemaPage } from '../pages/tema/tema';
import { TerminosCondicionesPage } from '../pages/terminos-condiciones/terminos-condiciones';
import { TipoUnidadPage } from '../pages/tipo-unidad/tipo-unidad';
import { PaginaPacientePage } from '../pages/pagina-paciente/pagina-paciente';
import { ListadoDatosPage } from '../pages/listado-datos/listado-datos';
import { TiendamonedasPage } from '../pages/tiendamonedas/tiendamonedas';
import { DatosService } from '../services/datos-service';
import { PacientesService } from '../services/pacientes-service';
import { DoctoresService } from '../services/doctores-service';
import { PaginaInsertarMedPage } from '../pages/pagina-insertar-med/pagina-insertar-med';
import { PaginaDoctorPage } from '../pages/pagina-doctor/pagina-doctor';
import { DatosPacientePage } from '../pages/datos-paciente/datos-paciente';
import { EstadisticasPacientePage } from '../pages/estadisticas-paciente/estadisticas-paciente';

/*Base de datos*/
import { Services } from '@angular/core/src/view';
import { FIREBASE_CONFIG } from '../app/firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    CerrarSesionPage,
    CompartirPage,
    ComunidadAsobolPage,
    ConocenosPage,
    EditarPerfilPage,
    EstadisticasPage,
    ExportarDatosPage,
    HomePage,
    IdiomaPage,
    InicioSesionPage,
    MonedasNivelPage,
    NotificacionesPage,
    RegistroPage,
    TemaPage,
    TerminosCondicionesPage,
    TiendamonedasPage,
    TipoUnidadPage,
    PaginaPacientePage,
    ListadoDatosPage,
    PaginaInsertarMedPage,
    EstadisticasPacientePage,
    PaginaDoctorPage,
    DatosPacientePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage,
    CerrarSesionPage,
    CompartirPage,
    ComunidadAsobolPage,
    ConocenosPage,
    EditarPerfilPage,
    EstadisticasPage,
    ExportarDatosPage,
    HomePage,
    IdiomaPage,
    InicioSesionPage,
    MonedasNivelPage,
    NotificacionesPage,
    RegistroPage,
    TemaPage,
    TerminosCondicionesPage,
    TipoUnidadPage,
    TiendamonedasPage,
    PaginaPacientePage,
    ListadoDatosPage,
    PaginaInsertarMedPage,
    EstadisticasPacientePage,
    PaginaDoctorPage,
    DatosPacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosService,
    PacientesService,
    DoctoresService
  ]
})
export class AppModule {}
