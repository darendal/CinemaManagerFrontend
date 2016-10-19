import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from "../components/app.component";
import {MaterializeDirective} from "angular2-materialize";
import {CinemaList} from "../components/cinema-list.component";
import {EditCinema} from "../components/edit-cinema.component";
import {ContactIcon} from "../components/contact-icon.component";
import {HttpModule} from "@angular/http"
import {ToastTest} from "../components/toast-test.component";
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations: [ AppComponent,MaterializeDirective,CinemaList,EditCinema,ContactIcon,ToastTest],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

