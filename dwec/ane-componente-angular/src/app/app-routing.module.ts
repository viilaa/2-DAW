import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProductViewComponent } from './product-view/product-view.component';

const routes: Routes = [
  {path: 'home', component: HomeViewComponent},
  {path: 'product', component: ProductViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
