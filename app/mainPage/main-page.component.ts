import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'ably-demo',
    directives: [ROUTER_DIRECTIVES,NS_ROUTER_DIRECTIVES],
    templateUrl: 'main-page.component.html'
})
export class MainComponent {

}