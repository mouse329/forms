import { Component, OnInit } from '@angular/core';

import { Dist } from './dist';
import { Hero } from './hero';

import { DataService } from './data.service';

@Component({
    selector:'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroComponent implements OnInit {
    dists: Dist[];
    errorMessage: string;
    mode = 'Observable';

    constructor(
        private dataService: DataService,
    ){}

    ngOnInit() { this.getDists(); }

    getDists(){
        this.dataService.getDists()
                        .subscribe(
                            dists => this.dists = dists,
                            error => this.errorMessage = <any>error
                        )
    }

    model = new Hero(18, 'Dr IQ','', 'Chuck Overstreet');

    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }

    newHero() {
    this.model = new Hero(42, '', '');
    }

    skyDog(): Hero {
    let myHero =  new Hero(42, 'SkyDog',
                            'Fetch any object at any distance',
                            'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
    return myHero;
    }

}