import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Dist } from './dist';
import { Hero } from './hero';

import { DataService } from './data.service';

@Component({
    selector:'hero-form',
    templateUrl: './hero-form.component.html'
})

export class HeroComponent implements OnInit {
    
    powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
    hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');
    dists: Dist[];
    errorMessage: string;
    mode = 'Observable';
        
    heroForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private dataService: DataService
    ){}

    submitted = false;


    ngOnInit(): void { 
        this.buildForm();
        this.getDists()
    }

    getDists(){
        this.dataService.getDists()
                        .subscribe(
                            dists => this.dists = dists,
                            error => this.errorMessage = <any>error
                        )
    }

    buildForm(): void {
        this.heroForm = this.fb.group({
            'name': [
                this.hero.name,[
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(24),
                ]
            ],
            'alterEgo': [this.hero.alterEgo],
            'power': [this.hero.power, Validators.required]
        });
        this.heroForm.valueChanges
            .subscribe(data => this.onVauleChanged(data));
        
        this.onVauleChanged();
    };

    onSubmit() { 
        this.submitted = true;
        this.hero = this.heroForm.value; 
    }
    onVauleChanged(data?: any) {
        if (!this.heroForm) { return }
        const form = this.heroForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid){
                const messages = this.validationMessages[field];
                for (const key in control.errors){
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'name': '',
        'power':''
    }

    validationMessages = {
        'name': {
            'required': 'Name is required',
            'minlength': 'Name must be at least 4 characters long',
            'maxlength': 'Name cannot be more than 24 characters long',
        },
        'power':{
            'required': 'power is required'
        }
    }



    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.hero); }

}