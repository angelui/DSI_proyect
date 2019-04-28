import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';
import { CompartirPage } from '../pages/compartir/compartir';
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
import { PaginaInsertarMedPage } from '../pages/pagina-insertar-med/pagina-insertar-med';


@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    CerrarSesionPage,
    CompartirPage,
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
    PaginaInsertarMedPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage,
    CerrarSesionPage,
    CompartirPage,
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
    PaginaInsertarMedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosService
  ]
})
export class AppModule {}
