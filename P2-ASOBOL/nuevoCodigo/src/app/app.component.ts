import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AjustesPage } from '../pages/ajustes/ajustes';
import { CerrarSesionPage } from '../pages/cerrar-sesion/cerrar-sesion';
import { CompartirPage } from '../pages/compartir/compartir';
import { ConocenosPage } from '../pages/conocenos/conocenos';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { ExportarDatosPage } from '../pages/exportar-datos/exportar-datos';
import { HomePage } from '../pages/home/home';
import { IdiomaPage } from '../pages/idioma/idioma';
import { InicioSesionPage } from '../pages/inicio-sesion/inicio-sesion';
import { MonedasNivelPage } from '../pages/monedas-nivel/monedas-nivel';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { PrivacidadPage } from '../pages/privacidad/privacidad';
import { RegistroPage } from '../pages/registro/registro';
import { TemaPage } from '../pages/tema/tema';
import { TerminosCondicionesPage } from '../pages/terminos-condiciones/terminos-condiciones';
import { TipoUnidadPage } from '../pages/tipo-unidad/tipo-unidad';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

