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
import { ToArray } from './toArrayConversion.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexLayoutComponent,
    AddCarouselComponent,
    ShowCardComponent,
    ToArray
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [paintingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
