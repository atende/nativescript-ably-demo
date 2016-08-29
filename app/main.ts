// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {MainComponent} from "./mainPage/main-page.component";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {SIDEDRAWER_PROVIDERS} from "nativescript-telerik-ui/sidedrawer/angular";
import {RouterOutletMap} from "@angular/router";
import {NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

nativeScriptBootstrap(MainComponent, [APP_ROUTER_PROVIDERS, SIDEDRAWER_PROVIDERS, APP_ROUTER_PROVIDERS, 
                                        NS_ROUTER_PROVIDERS, RouterOutletMap], { startPageActionBarHidden: false });