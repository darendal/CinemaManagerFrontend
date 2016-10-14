

import {Injectable} from "@angular/core";
import {CINEMAS} from "../mocks/mock-cinemas";
import {Cinema} from "../data-objects/cinema";

@Injectable()
export class CinemaService{

    getCinemas(): Promise<Cinema[]> {
        return Promise.resolve(CINEMAS);
    }
}