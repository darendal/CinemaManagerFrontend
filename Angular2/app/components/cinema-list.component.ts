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
    providers:[CinemaService, ToastService]
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

    onCinemaPost(event): void
    {
        this.cinemas.push(event.value);
    }

    onDelete(cinema: Cinema): void
    {
        this.cinemaService.delete(cinema.CinemaId)
            .then(()=>
            {
                this.toaster.showToastSuccess("Cinema Deleted");
                this.cinemas = this.cinemas.filter(c=>c !== cinema);
                if(this.selectedCinema === cinema)
                {
                    this.selectedCinema = null;
                }
            });
    }

    title = "Edit Cinema";
    cinemas: Cinema[];

    selectedCinema: Cinema;

}
