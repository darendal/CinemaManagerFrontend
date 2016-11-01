import {Component} from "@angular/core";

@Component({
    selector:'movie-manager',
    template:`
<movie-search (movieSelected)="onSelect($event)"></movie-search>
<div class="row">
    <div class="col s6">
        <movie-detail [movieId]="selectedMovieId"></movie-detail>
    </div>
</div>

`,

})
export class MovieManager{

    selectedMovieId:string;

    onSelect(event) :void
    {
        this.selectedMovieId = event.value;
    }
}