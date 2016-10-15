import {Component,Input} from "@angular/core";
@Component({
    selector:'contact-icon',
    styles:[
` span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: x-large;
    }
`
    ],
    template:
`
<div *ngIf="name">
    <div class="circle" [class]="'circle ' +getBackgroundColor()">
        <span class="white-text">{{name |slice:0:1}}</span>
    </div>
</div>

`

})
export class ContactIcon{
    @Input()
    name:string;

    getBackgroundColor():string{
       return COLOR_DICT[this.name.charAt(0).toUpperCase()];
    }
}

const COLOR_DICT={
    "A":"red lighten-1",
    "B":"red darken-1",
    "C":"pink lighten-1",
    "D":"pink darken-1",
    "E":"purple lighten-1",
    "F":"purple darken-1",
    "G":"deep-purple lighten-1",
    "H": "deep-purple darken-1",
    "I":"indigo lighten-1",
    "J":"indigo darken-1",
    "K":"blue lighten-1",
    "L":" blue darken-2",
    "M": "light-blue lighten-1",
    "N":"light-blue darken-1",
    "O":"cyan lighten-1",
    "P":"cyan darken-2",
    "Q":"teal lighten-1",
    "R":"teal darken-1",
    "S":"green lighten-1",
    "T":"green darken-1",
    "U":"light-green lighten-1",
    "V":"light-green darken-1",
    "W": "blue-grey",
    "X": "yellow darken-2",
    "Y":"deep-orange lighten-1",
    "Z":"deep-orange darken-1"
}