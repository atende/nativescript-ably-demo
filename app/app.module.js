"use strict";
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require('nativescript-telerik-ui/listview/angular');
var router_1 = require("nativescript-angular/router");
var core_1 = require("@angular/core");
var shared_module_1 = require("./shared/shared.module");
var app_routes_1 = require("./app.routes");
var main_page_component_1 = require("./mainPage/main-page.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                main_page_component_1.MainComponent
            ],
            declarations: [
                angular_2.LISTVIEW_DIRECTIVES,
                angular_1.SIDEDRAWER_DIRECTIVES,
                main_page_component_1.MainComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule,
                app_routes_1.RouteModuleComponent,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes)
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map