import {Component, Input, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common';

@Component({
    selector:'my-hero-detail',
    template:`
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label> <input [(ngModel)]="hero.name" value="{{hero.name}}" placeholder="name"></div>
        <button (click)="goBack()">Back</button>
        <button (click)="save()">Save</button>
    </div>
    `,
})
export class HeroDetailComponent implements OnInit{
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location,
    ){}


    goBack() : void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    @Input()
    hero: Hero;
}