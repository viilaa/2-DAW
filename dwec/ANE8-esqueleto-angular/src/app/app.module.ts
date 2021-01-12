import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioViewComponent } from './inicio-view/inicio-view.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';
import { InformesViewComponent } from './informes-view/informes-view.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioViewComponent,
    ProductosViewComponent,
    InformesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
