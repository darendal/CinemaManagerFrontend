import {Component, EventEmitter, Output} from "@angular/core";
import {Cinema} from "../data-objects/cinema";
import {Input} from "@angular/core";
import {CinemaService} from "../services/cinema.service";
import {ToastService} from "../services/toast.service";



@Component({
    selector:'edit-cinema',
    styles:[
`

`
    ],
    templateUrl:'./app/views/edit-cinema.component.html'
})
export class EditCinema{

    @Input()
    cinema:Cinema;

    @Output() cinemaPost = new EventEmitter();

    constructor(private cinemaService:CinemaService, private toaster:ToastService){}

    onSubmit(){
        if(this.cinema.CinemaId == new Cinema().CinemaId){
            this.cinemaService.create(this.cinema)
                .then(cinema =>
                {
                    this.cinema=cinema;
                    this.toaster.showToastSuccess("Cinema Created");
                    this.cinemaPost.emit({
                        value:cinema
                    })
                })
                .catch(response => this.toaster.showToastError(response.Message));
        }
        else {
            this.cinemaService.update(this.cinema)
                .then(_=>this.toaster.showToastSuccess("Cinema Saved"));
        }
    }

}