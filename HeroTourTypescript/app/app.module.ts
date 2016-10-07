import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule, InMemoryDbService} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data-service";


@NgModule({
    imports:[
            BrowserModule,
            FormsModule,
            HttpModule,
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            RouterModule.forRoot([
            {
                path:'heroes',
                component: HeroesComponent
            },
            {
                path:'dashboard',
                component: DashboardComponent
            },
            {
                path:'',
                redirectTo:'/dashboard',
                pathMatch:'full'
            },
            {
                path:'detail/:id',
                component: HeroDetailComponent
            }]),
    ],
    declarations: [ AppComponent,HeroesComponent, HeroDetailComponent, DashboardComponent ],
    providers:    [ HeroService],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

