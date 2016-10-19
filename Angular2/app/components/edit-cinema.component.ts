import {Component, EventEmitter} from "@angular/core";
import {Cinema} from "../data-objects/cinema";
import {Input} from "@angular/core";
import {CinemaService} from "../services/cinema.service";
import {ToastService} from "../services/toast.service";



@Component({
    selector:'edit-cinema',
    templateUrl:'./app/views/edit-cinema.component.html'
})
export class EditCinema{

    globalActions = new EventEmitter<string>();
    @Input()
    cinema:Cinema;

    constructor(private cinemaService:CinemaService, private toaster:ToastService){}

    onSubmit(){
        if(this.cinema.CinemaId == new Cinema().CinemaId){
            this.cinemaService.create(this.cinema)
                .then(cinema => this.cinema=cinema)
                .catch(response => this.toaster.showToastError(response.Message));
        }
        else {
            this.cinemaService.update(this.cinema)
                .then(_=>this.toaster.showToastSuccess("Cinema Saved"));
        }
    }

}