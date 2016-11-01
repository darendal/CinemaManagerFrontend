import {Component} from "@angular/core";

@Component({
    selector:'my-application',
    template: ` 
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><span style="margin-left: 5%">Cinema Manager</span></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
</nav>
<div class="container">
    <movie-manager></movie-manager>
    
</div>

`
})
export class AppComponent{}