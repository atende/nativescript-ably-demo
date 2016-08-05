"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var main_page_component_1 = require("./mainPage/main-page.component");
var app_routes_1 = require('./app.routes');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
application_1.nativeScriptBootstrap(main_page_component_1.MainComponent, [app_routes_1.APP_ROUTER_PROVIDERS]);
//# sourceMappingURL=main.js.map