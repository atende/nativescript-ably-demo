// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {MainComponent} from "./mainPage/main-page.component";
import {APP_ROUTER_PROVIDERS} from './app.routes';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

nativeScriptBootstrap(MainComponent, [APP_ROUTER_PROVIDERS]);