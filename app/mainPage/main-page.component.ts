
import {Component, ViewChild, Inject, OnInit, ChangeDetectorRef} from "@angular/core";
import {Route} from "@angular/router";
import {Page} from "ui/page";
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');
import { routes } from "../app.routes"

@Component({
    moduleId: module.id,
    selector: 'ably-demo',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.css']
})
export class MainComponent implements OnInit {
    routes =  routes;
    icon: String
    constructor(@Inject(Page) private page: Page, private _changeDetectionRef: ChangeDetectorRef){

    }
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent
    private drawer: SideDrawerType

    ngAfterViewInit(){
        this.drawer  = this.drawerComponent.sideDrawer
        this._changeDetectionRef.detectChanges();
    }

    ngOnInit() {
        this.icon = String.fromCharCode(0xe903)
    }
    changeDrawer(){
        this.drawer.toggleDrawerState()
    }
    extractTextLabelFromRouteData(route: Route): string {
        if(route.data == undefined || route.data == null || route.data['label'] == undefined || route.data['label'] == null){
            return "No router text label"
        }else{
            return route.data['label'];
        }
    }
}