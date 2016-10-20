export class Cinema{
    CinemaId: number;
    Name: string;
    Address:string;
    OpenTimeHours:number;
    OpenTimeMinutes:number;
    CloseTimeHours:number;
    CloseTimeMinutes:number;

    constructor(){
        this.CloseTimeHours = 0;
        this.CloseTimeMinutes=0;

        this.OpenTimeHours = 0;
        this.OpenTimeMinutes = 0;
    }

}