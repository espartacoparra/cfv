import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import { AdminComponent } from "./components/admin/admin.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { ProductslistComponent } from './components/admin/products/productslist/productslist.component';
import { LoginComponent } from "./components/login/login.component";
import { CategoryComponent } from './components/admin/category/category.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { IndexComponent } from './components/public/index/index.component';
//guards
import { LoginGuard } from "./guards/login.guard";
import { LoggedGuard } from './guards/logged.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: 'sigin', component: SiginComponent, canActivate: [LoggedGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoginGuard, AdminGuard],
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
  { path: 'public', component: IndexComponent, canActivate: [LoginGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
