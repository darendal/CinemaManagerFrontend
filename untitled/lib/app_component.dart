import 'package:angular2/core.dart';
import 'hero_service.dart';
import 'heroes_component.dart';
import 'package:angular2/router.dart';
import 'dashboard_component.dart';
@Component(
    selector:'my-app',
    template:
    '''
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink] = "['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    ''',
    providers: const [
      HeroService,
      ROUTER_PROVIDERS
    ],
    directives: const [
      ROUTER_DIRECTIVES
    ]
)
@RouteConfig(const [
  const Route(path: '/heroes',name: 'Heroes',component: HeroesComponent),
  const Route(path:'/dashboard',name:'Dashboard', component:DashboardComponent, useAsDefault:true)
])
class AppComponent{
  final String title = "Tour of Heroes";
}
