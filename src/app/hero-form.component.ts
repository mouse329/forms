import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
    selector:'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroComponent {
    powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Change'];

    model = new Hero (18, 'Dr IQ', this.powers[0], 'Chuck Overstreet')

    submitted = false;

    onSubmit(){ this.submitted = true;}

    newHero() {
        this.model = new Hero(42, '', '');
    }

    //TODO
    get diagnostic() { return JSON.stringify(this.model);}
}