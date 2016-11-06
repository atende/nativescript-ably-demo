"use strict";
var core_1 = require("@angular/core");
var message_1 = require("./message");
var auth_component_1 = require("./auth/auth.component");
var shared_module_1 = require("./shared/shared.module");
var components = [
    message_1.MessageComponent,
    auth_component_1.AuthComponent
];
var RouteModuleComponent = (function () {
    function RouteModuleComponent() {
    }
    RouteModuleComponent = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule
            ],
            declarations: components,
            exports: components
        }), 
        __metadata('design:paramtypes', [])
    ], RouteModuleComponent);
    return RouteModuleComponent;
}());
exports.RouteModuleComponent = RouteModuleComponent;
exports.routes = [
    { path: "", redirectTo: "messages", pathMatch: "full", data: { label: "Home" } },
    { path: "messages", component: message_1.MessageComponent, data: { label: 'Messages' } },
    { path: "auth", component: auth_component_1.AuthComponent, data: { label: "Auth" } }
];
//# sourceMappingURL=app.routes.js.map