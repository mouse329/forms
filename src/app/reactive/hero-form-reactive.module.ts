import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { HeroComponent } from './hero-form.component';


@NgModule({
    imports: [SharedModule, ReactiveFormsModule],
    declarations:[HeroComponent],
    exports: [HeroComponent]
})

export class HeroFormReactiveModule{}
