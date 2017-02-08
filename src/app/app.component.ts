import { Component }          from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}<img src="./app/images/catlogo.png"/></h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Cats</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Cats';
}
