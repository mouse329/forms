import { NgModule }            from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';


import { AppComponent }  from './app.component';
import { HeroComponent } from './hero-form.component';
import { DataService }   from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
