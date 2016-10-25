

import {Injectable} from "@angular/core";
import {Cinema} from "../data-objects/cinema";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CinemaService{

    private cinemaUrl = 'http://localhost:63426/Api/Cinemas/';
    private headers = new Headers({'Content-Type':'application/json'});

    constructor(private http:Http){}

    getCinemas(): Promise<Cinema[]> {
        return this.http.get(this.cinemaUrl)
            .toPromise()
            .then(response =>response.json() as Cinema[])
            .catch(this.handleError);
    }

    update(cinema: Cinema) : Promise<Cinema> {
        const url = `${this.cinemaUrl}/${cinema.CinemaId}`;

        return this.http
            .put(url,JSON.stringify(cinema),{headers:this.headers})
            .toPromise()
            .then(()=>cinema)
            .catch(this.handleError);
    }

    create(cinema : Cinema) : Promise<Cinema>{
        return this.http.post(this.cinemaUrl,JSON.stringify(cinema),{headers: this.headers})
            .toPromise()
            .then(result => result.json())
            .catch(this.handleError);
    }

    delete(id: number): Promise<void>{
        const url = `${this.cinemaUrl}/${id}`;

        return this.http.delete(url,{headers:this.headers})
            .toPromise()
            .then(()=>null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}