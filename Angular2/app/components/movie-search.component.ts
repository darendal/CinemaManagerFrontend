import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {MovieService} from "../services/movie.service";
import {Movie} from "../data-objects/movie";
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

@Component({
    selector:'movie-search',
    template:
`
<div id="search-component">
    <h4>Movie Search</h4>
    <div class="row">
        <div class="col s6">
            <input #searchBox id="search-box" 
                   (keyup)="search(searchBox.value)"
                   (focus)="isInputInFocus(true,searchBox)"
            />
            <div class="z-depth-3" style="position: absolute;z-index: 999" *ngIf="focus && movies">
                <ul class="collection with-header" 
                >
                    <li class="collection-item avatar" *ngFor="let movie of movies | async | slice:0:5"
                        (mouseenter)="onMouseEnter(movie)"
                        (mouseleave)="onMouseLeave()"
                        (click)="onSelect(movie,searchBox)"
                        [class.active]="shouldHighlight(movie)"
                    >
                        <img [src]="movie.Poster == 'N/A' ? 'content/images/default-placeholder.png' : movie.Poster " 
                            onerror="this.src='content/images/default-placeholder.png'"
                            
                            class="circle responsive-image"/>
                        <span class="title">{{movie.Title}}</span>
                        <p>
                            Released: {{movie.Year}}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`,
    providers:[MovieService]
})
export class MovieSearch implements OnInit{

    movies: Observable<Movie[]>;
    private searchTerms = new Subject<string>();
    focus:boolean;
    hoveredMovie: Movie;

    @Output() movieSelected = new EventEmitter();

    constructor(private movieService: MovieService){}

    search(term:string): void
    {
        this.searchTerms.next(term);
    }

    onMouseEnter(movie:Movie) :void
    {
        this.hoveredMovie = movie;
    }

    onMouseLeave() :void
    {
        this.hoveredMovie = null;
    }

    shouldHighlight(movie:Movie):boolean
    {
        return this.hoveredMovie && (this.hoveredMovie == movie);
    }

    isInputInFocus(state:boolean, input :HTMLInputElement) : void
    {
        this.focus = state;

        if(!this.focus)
        {
            input.value = "";
        }
    }

    onSelect(movie:Movie, input : HTMLInputElement):void
    {
        this.movieSelected.emit({
            value:movie.imdbID
        });
        this.isInputInFocus(false,input);
    }

    ngOnInit(): void {
        this.movies = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term
                ? this.movieService.search(term)
                : Observable.of<Movie[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Movie[]>([]);
            });
    }
}