import {Component} from "@angular/core";
import {ToastService} from "../services/toast.service";
@Component({
    selector:'toast-test',
    template:
`
<div>
    <label class="label">Toast Message</label>
    <input [(ngModel)]="message"/>
</div>
<div class="row">
    <div class="col s4">
        <a class="btn" (click)="Success()">Success</a>
    </div>
    <div class="col s4">
        <a class="btn"(click)="Warn()">Warn</a>
    </div>
    <div class="col s4">
        <a class="btn" (click)="Error()">Error</a>
    </div>
</div>
`,
    providers:[ToastService]
})
export class ToastTest{

    constructor(private toaster:ToastService){}

    message:string = "Test Message";

    Success():void{
        this.toaster.showToastSuccess(this.message);
    }

    Warn():void {
        this.toaster.showToastWarn(this.message);
    }

    Error():void {
        this.toaster.showToastError(this.message);
    }

}
