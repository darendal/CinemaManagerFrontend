import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
import {Movie} from "../data-objects/movie";

@Injectable()
export class MovieService {
    private cinemaUrl = 'http://localhost:63426/Api/Movies/';
    private searchUrl = 'http://www.omdbapi.com/?'
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http: Http){}

    search(title:string):Observable<Movie[]>{
        return this.http
            .get(`${this.searchUrl}s=${title}&type=movie`)
            .map((r: Response) =>
            {
                let list = (r.json().Search as Movie[])
                if(list)
                {
                    console.log(list);
                    list.sort(function(a,b) {
                        return b.Year - a.Year
                    })
                }

                return list
            });
    }

    getCinemas(): Promise<Movie[]> {
        return this.http.get(this.cinemaUrl)
            .toPromise()
            .then(response =>response.json() as Movie[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}