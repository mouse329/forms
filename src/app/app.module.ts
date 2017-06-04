import { NgModule }            from '@angular/core';
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
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
