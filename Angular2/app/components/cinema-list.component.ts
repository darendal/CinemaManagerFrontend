import {Component} from "@angular/core";
import {Cinema} from "../data-objects/Cinema";
import {CinemaService} from "../services/cinema.service";
import {OnInit} from "@angular/core";
import {ToastService} from "../services/toast.service";


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
    providers:[CinemaService,ToastService]
})
export class CinemaList implements OnInit{
    ngOnInit(): void {
        this.getCinemas();
    }
    constructor(private cinemaService:CinemaService, private toaster:ToastService){}

    getCinemas():void{
        this.cinemaService.getCinemas().then(cinemas =>
            this.cinemas = cinemas);
    }

    onSelect(cinema:Cinema):void {
        this.selectedCinema = cinema;
    }

    newCinema():void{
        this.selectedCinema = new Cinema;
    }



    title = "Edit Cinema";
    cinemas: Cinema[];

    selectedCinema: Cinema;

}
