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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFzQyw0Q0FBNEMsQ0FBQyxDQUFBO0FBQ25GLHdCQUFvQywwQ0FBMEMsQ0FBQyxDQUFBO0FBQy9FLHVCQUF5Qyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ3ZFLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyw4QkFBNkIsd0JBQXdCLENBQUMsQ0FBQTtBQUV0RCwyQkFBNkMsY0FBYyxDQUFDLENBQUE7QUFDNUQsb0NBQThCLGdDQUc5QixDQUFDLENBSDZEO0FBdUI5RDtJQUFBO0lBRUEsQ0FBQztJQXRCRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCxtQ0FBYTthQUNoQjtZQUNELFlBQVksRUFBRTtnQkFDViw2QkFBbUI7Z0JBQ25CLCtCQUFxQjtnQkFDckIsbUNBQWE7YUFFaEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7Z0JBQ1osaUNBQXdCO2dCQUN4QixpQ0FBb0I7Z0JBQ3BCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxtQkFBTSxDQUFDO2FBQzNDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjthQUMzQjtTQUNKLENBQUM7O2lCQUFBO0lBR0YsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLGlCQUFTLFlBRXJCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTSURFRFJBV0VSX0RJUkVDVElWRVMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBMSVNUVklFV19ESVJFQ1RJVkVTIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvbGlzdHZpZXcvYW5ndWxhcic7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuL3NoYXJlZC9zaGFyZWQubW9kdWxlXCI7XG5cbmltcG9ydCB7IHJvdXRlcywgUm91dGVNb2R1bGVDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAucm91dGVzXCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpblBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudFwiXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgTWFpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIExJU1RWSUVXX0RJUkVDVElWRVMsXG4gICAgICAgIFNJREVEUkFXRVJfRElSRUNUSVZFUyxcbiAgICAgICAgTWFpbkNvbXBvbmVudFxuICAgIFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBTaGFyZWRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgUm91dGVNb2R1bGVDb21wb25lbnQsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcylcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyBcblxufSJdfQ==