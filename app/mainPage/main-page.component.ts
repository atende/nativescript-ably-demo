
import {Component, ViewChild, Inject, OnInit, ChangeDetectorRef} from "@angular/core";
import {Page} from "ui/page";
import {RadSideDrawerComponent, SideDrawerType} from "nativescript-telerik-ui/sidedrawer/angular";
import sideDrawerModule = require('nativescript-telerik-ui/sidedrawer');


@Component({
    moduleId: module.id,
    selector: 'ably-demo',
    templateUrl: 'main-page.component.html',
    styleUrls: ['main-page.component.css']
})
export class MainComponent implements OnInit {
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
}