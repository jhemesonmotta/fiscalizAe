import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PartialGraficosComponent } from './components/dashboard/partials/partial-graficos/partial-graficos.component';
import { PartialListasComponent } from './components/dashboard/partials/partial-listas/partial-listas.component';
import { PartialEstatisticasRapidasComponent } from './components/dashboard/partials/partial-estatisticas-rapidas/partial-estatisticas-rapidas.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    PartialGraficosComponent,
    PartialListasComponent,
    PartialEstatisticasRapidasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
