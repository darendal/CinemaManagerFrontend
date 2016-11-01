import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {MovieService} from "../services/movie.service";
import {Movie} from "../data-objects/movie";
@Component({
    selector: 'movie-detail',
    styles:[
        `
.card-image {
    max-width:10%;
    height:auto;
}
`
    ],
    templateUrl:'./app/views/movie-detail.component.html',
    providers:[MovieService]
})
export class MovieDetail implements OnChanges{

    @Input() movieId : string;

    movie:Movie

    constructor(private movieService: MovieService){}

    ngOnChanges(changes: SimpleChanges) : void
    {
        if(changes["movieId"] && this.movieId)
        {
            this.movieService.getMovieByImdbId(this.movieId)
                .then(movie=>this.movie=movie);
        }
    }
}