import { Component, ViewChild } from "@angular/core";
import { RouterOutlet } from '@angular/router';
import { ROUTE_ANIMATION } from './constants/animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    ROUTE_ANIMATION
  ]
})
export class AppComponent {
  @ViewChild(RouterOutlet) routerOutlet;

  getRouteAnimationState() {
    return this.routerOutlet && this.routerOutlet.activatedRouteData && this.routerOutlet.activatedRouteData.transitionState;
  }
}
