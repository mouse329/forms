import { NgModule }            from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule }          from '@angular/http';


import { AppComponent }  from './app.component';
import { HeroComponent } from './reactive/hero-form.component';
import { DataService }   from './data.service';
import { SharedModule } from './shared/shared.module';
import { HeroFormReactiveModule } from './reactive/hero-form-reactive.module';

@NgModule({
  declarations: [
    AppComponent,   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    HeroFormReactiveModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
