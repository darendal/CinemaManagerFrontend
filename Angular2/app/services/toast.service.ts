import {Injectable} from "@angular/core";
import * as MaterializeDirective from "angular2-materialize";
@Injectable()
export class ToastService{

    private successColor:string = "green lighten-2";
    private warnColor:string = "yellow darken-3";
    private errorColor:string = "red lighten-1";

    private defaultDisplayTime:number = 3000;

    showToastWarn(text:string):void{
        MaterializeDirective.toast(text,this.defaultDisplayTime,this.warnColor);
    }
    showToastError(text:string):void{
        MaterializeDirective.toast(text,this.defaultDisplayTime,this.errorColor);
    }
    showToastSuccess(text:string):void{
        MaterializeDirective.toast(text,this.defaultDisplayTime,this.successColor);
    }
}