"use strict";
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var angular_2 = require('nativescript-telerik-ui/listview/angular');
var router_1 = require("nativescript-angular/router");
var platform_1 = require("nativescript-angular/platform");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var app_routes_1 = require("./app.routes");
var main_page_component_1 = require("./mainPage/main-page.component");
var message_component_1 = require("./message/message.component");
var test_component_1 = require("./test/test.component");
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
                main_page_component_1.MainComponent,
                message_component_1.MessageComponent,
                test_component_1.TestComponent
            ],
            imports: [
                platform_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routes_1.routes)
            ],
            exports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map