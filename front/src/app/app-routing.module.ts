import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductslistComponent } from './components/admin/products/productslist/productslist.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard/admin/products/list', component:ProductslistComponent},
  {path:'**',redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
