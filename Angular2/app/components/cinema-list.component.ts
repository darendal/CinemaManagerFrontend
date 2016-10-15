import {Component} from "@angular/core";
import {Cinema} from "../data-objects/Cinema";
import {CinemaService} from "../services/cinema.service";
import {OnInit} from "@angular/core";


@Component({
    styles:[
`
.address {
    font-size: smaller;
    color: darkgray;
}
`
    ],
    selector: 'cinema-list',
    templateUrl:'./app/views/cinema-list.component.html',
    providers:[CinemaService]
})
export class CinemaList implements OnInit{
    ngOnInit(): void {
        this.getCinemas();
    }
    constructor(private cinemaService:CinemaService){}

    getCinemas():void{
        this.cinemaService.getCinemas().then(cinemas =>
            this.cinemas = cinemas);
    }

    onSelect(cinema:Cinema):void {
        this.selectedCinema = cinema;
    }

    title = "Edit Cinema";
    cinemas: Cinema[];

    selectedCinema: Cinema;

}
