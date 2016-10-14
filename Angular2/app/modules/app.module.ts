import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from "../components/app.component";
import {MaterializeDirective} from "angular2-materialize";
import {CinemaList} from "../components/cinema-list.component";
import {EditCinema} from "../components/edit-cinema.component";


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
    ],
    declarations: [ AppComponent,MaterializeDirective,CinemaList,EditCinema],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

