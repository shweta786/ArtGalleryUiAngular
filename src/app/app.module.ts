import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import { AddCarouselComponent } from './add-carousel/add-carousel.component';
import { paintingService } from './painting.service';
import { ShowCardComponent } from './show-card/show-card.component';
import { HttpModule } from '@angular/http';
import { ToArray } from './toArrayConversion.pipe';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AuthSessiomService } from './auth-sessiom.service';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexLayoutComponent,
    AddCarouselComponent,
    ShowCardComponent,
    HomeComponent,
    ToArray,
    FooterComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [paintingService, AuthSessiomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
