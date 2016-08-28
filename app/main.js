"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var main_page_component_1 = require("./mainPage/main-page.component");
var app_routes_1 = require('./app.routes');
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var router_1 = require('@angular/router');
var router_2 = require('nativescript-angular/router');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
application_1.nativeScriptBootstrap(main_page_component_1.MainComponent, [app_routes_1.APP_ROUTER_PROVIDERS, angular_1.SIDEDRAWER_PROVIDERS, app_routes_1.APP_ROUTER_PROVIDERS,
    router_2.NS_ROUTER_PROVIDERS, router_1.RouterOutletMap], { startPageActionBarHidden: false });
//# sourceMappingURL=main.js.map