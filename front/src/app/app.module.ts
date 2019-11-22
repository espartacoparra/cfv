import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//providers
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";

//localServices
import { RequestService } from "./services/request.service";
import { ImageService } from "./services/image.service";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//imports
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/public/header/header.component';
import { FooterComponent } from './components/public/footer/footer.component';
import { CarouselComponent } from './components/public/carousel/carousel.component';
import { IndexComponent } from './components/public/index/index.component';
import { NavbaradminComponent } from './components/admin/structure/navbaradmin/navbaradmin.component';
import { SiderbaradminComponent } from './components/admin/structure/siderbaradmin/siderbaradmin.component';
import { FooteradminComponent } from './components/admin/structure/footeradmin/footeradmin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ProductslistComponent } from './components/admin/products/productslist/productslist.component';

//modulos para formularios
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { SiginComponent } from './components/sigin/sigin.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    IndexComponent,
    NavbaradminComponent,
    SiderbaradminComponent,
    FooteradminComponent,
    DashboardComponent,
    ProductslistComponent,
    LoginComponent,
    AdminComponent,
    CategoryComponent,
    SiginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [RequestService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
