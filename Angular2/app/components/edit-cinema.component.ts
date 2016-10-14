import {Component} from "@angular/core";
import {Cinema} from "../data-objects/cinema";
import {Input} from "@angular/core";

@Component({
    selector:'edit-cinema',
    templateUrl:'./app/views/edit-cinema.component.html'
})
export class EditCinema{

    @Input()
    cinema:Cinema;
}