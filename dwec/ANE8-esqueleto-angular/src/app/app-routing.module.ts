import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformesViewComponent } from './informes-view/informes-view.component';
import { InicioViewComponent } from './inicio-view/inicio-view.component';
import { ProductosViewComponent } from './productos-view/productos-view.component';

const routes: Routes = [
  { path: 'inicio', component: InicioViewComponent },
  { path: 'productos', component: ProductosViewComponent },
  { path: 'informes', component: InformesViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
