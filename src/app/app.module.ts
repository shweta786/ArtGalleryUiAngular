import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexLayoutComponent } from './index-layout/index-layout.component';
import { AddCarouselComponent } from './add-carousel/add-carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexLayoutComponent,
    AddCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
