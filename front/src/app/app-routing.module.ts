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
import { ImagesComponent } from './components/admin/images/images.component';
import { PublicComponent } from './components/public/public.component';
import { PublicproductComponent } from './components/public/publicproduct/publicproduct.component';
import { PubliccategoriesComponent } from './components/public/publiccategories/publiccategories.component';
import { RegisterproductsComponent } from './components/admin/products/registerproducts/registerproducts.component';
import { EditproductsComponent } from './components/admin/products/editproducts/editproducts.component';


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
        path: 'product/register',
        component: RegisterproductsComponent
      },
      {
        path: 'product/edit/:id',
        component: EditproductsComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'images/:product',
        component: ImagesComponent
      }
    ]
  },
  {
    path: 'public',
    component: PublicComponent,
    canActivate: [],
    children: [
      {
        path: 'index',
        component: IndexComponent
      }, {
        path: 'product/:id',
        component: PublicproductComponent
      }, {
        path: 'categories',
        component: PubliccategoriesComponent
      }, {
        path: 'images/:product',
        component: ImagesComponent
      }, {
        path: 'images/:product',
        component: ImagesComponent
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
