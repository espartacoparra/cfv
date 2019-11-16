import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { AdminComponent } from "./components/admin/admin.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { ProductslistComponent } from './components/admin/products/productslist/productslist.component';
import { LoginComponent } from "./components/login/login.component";
import { CategoryComponent } from './components/admin/category/category.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products/list',
        component: ProductslistComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
