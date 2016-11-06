import { SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui/sidedrawer/angular";
import { LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui/listview/angular';
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule } from "@angular/core";
import { routes } from "./app.routes";
import { MainComponent } from "./mainPage/main-page.component"
import { MessageComponent } from "./message/message.component"
import {TestComponent} from "./test/test.component"


@NgModule({
    bootstrap: [
        MainComponent
    ],
    declarations: [
        LISTVIEW_DIRECTIVES,
        SIDEDRAWER_DIRECTIVES,
        MainComponent,
        MessageComponent,
        TestComponent
    
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ]
})
export class AppModule { 

}