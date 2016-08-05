import {RouterConfig} from "@angular/router"
import {MessageComponent} from "./message"
import {TestComponent} from "./test/test.component"
import {nsProvideRouter} from 'nativescript-angular/router';

const routes: RouterConfig = [
    { path: "", redirectTo: "/messages", terminal: true },
    { path: "messages", component: MessageComponent },
    { path: "test", component: TestComponent }
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, { enableTracing: false })
];