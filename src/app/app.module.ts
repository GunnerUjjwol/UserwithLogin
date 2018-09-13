import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //<--ng model lives here
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { Modal1Component } from './components/modal1/modal1.component';
import { UnRegNavbarComponent } from './components/un-reg-navbar/un-reg-navbar.component';
import { EventComponent } from './components/event/event.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { UserRequestComponent } from './components/user-request/user-request.component';
import { AddBloodRequestComponent } from './components/bloodRequest/add-blood-request/add-blood-request.component';
import { LoginComponent } from './components/login/login.component';
import { AppHttpInterceptor } from './app-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AboutComponent,
    RegisterComponent,
    FooterComponent,
    Modal1Component,
    UnRegNavbarComponent,
    EventComponent,
    UserinfoComponent,
    UserRequestComponent,
    AddBloodRequestComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
