import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";

import { SharedModule } from "./shared/shared.module";

import { routes, RouteModuleComponent } from "./app.routes";
import { MainComponent } from "./mainPage/main-page.component"


@NgModule({
    bootstrap: [
        MainComponent
    ],
    declarations: [
        LISTVIEW_DIRECTIVES,
        SIDEDRAWER_DIRECTIVES,
        MainComponent
    
    ],
    imports: [
        SharedModule,
        NativeScriptRouterModule,
        RouteModuleComponent,
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class AppModule { 

}