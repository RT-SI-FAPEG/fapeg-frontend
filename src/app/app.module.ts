import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchesService } from './services/seachs.service';
import { SearchsComponent } from './pages/searchs/searchs.component';
import { IndicatorsService } from './services/indicators.service';
import { LogoutComponent } from './pages/logout/logout.component';
import { SearchComponent } from './pages/search/SearchComponent';
import { UserComponent } from './pages/user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    ForgetPasswordComponent,
    SidebarComponent,
    MainLayoutComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    SearchsComponent,
    LogoutComponent,
    SearchComponent,
    UserComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [LoginService, UserService, SearchesService, IndicatorsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
