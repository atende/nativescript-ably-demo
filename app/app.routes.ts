import { Routes } from "@angular/router"
import { NgModule } from "@angular/core"
import { MessageComponent } from "./message"
import { AuthComponent } from "./auth/auth.component"
import { SharedModule } from "./shared/shared.module"

const components = [
    MessageComponent,
    AuthComponent

];

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: components,
    exports: components
})
export class RouteModuleComponent {

}

export const routes: Routes = [
    { path: "", redirectTo: "messages", pathMatch: "full", data: {label: "Home"} },
    { path: "messages", component: MessageComponent, data: {label: 'Messages'} },
    { path: "auth", component: AuthComponent, data: {label: "Auth"} }
];