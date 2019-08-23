import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'layout',
    // animations: ['stepper'],
    templateUrl: './layout.component.html',   
})
export class LayOutComponent {
    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
      }
}
