
import { Component, ElementRef, ViewChild, Inject, OnInit, ChangeDetectorRef } from "@angular/core";
import { View } from "ui/core/view";
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import * as ObservableModule from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

// import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router'

@Component({
    moduleId: module.id,
    selector: 'ably-demo',
    directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES],
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.css']
})
export class MainComponent implements OnInit {
    constructor(@Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef){

    }
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent
    private drawer: SideDrawerType

    ngAfterViewInit(){
        this.drawer  = this.drawerComponent.sideDrawer
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {

    }
    openDrawer(){
        this.drawer.showDrawer()
    }
}