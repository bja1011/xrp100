import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {MyMaterialModule} from './modules/material/material.module';
import { FudViewComponent } from './components/fud-view/fud-view.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FudViewComponent,
    PartnersComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
