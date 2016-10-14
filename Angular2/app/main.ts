import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from "./modules/app.module";
import "angular2-materialize";



const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);