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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBQ3hDLHdCQUFpQyxXQUNqQyxDQUFDLENBRDJDO0FBQzVDLCtCQUE4Qix1QkFDOUIsQ0FBQyxDQURvRDtBQUNyRCw4QkFBNkIsd0JBRTdCLENBQUMsQ0FGb0Q7QUFFckQsSUFBTSxVQUFVLEdBQUc7SUFDZiwwQkFBZ0I7SUFDaEIsOEJBQWE7Q0FFaEIsQ0FBQztBQVNGO0lBQUE7SUFFQSxDQUFDO0lBVEQ7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRSxVQUFVO1lBQ3hCLE9BQU8sRUFBRSxVQUFVO1NBQ3RCLENBQUM7OzRCQUFBO0lBR0YsMkJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLDRCQUFvQix1QkFFaEMsQ0FBQTtBQUVZLGNBQU0sR0FBRztJQUNsQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsRUFBRTtJQUM5RSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDBCQUFnQixFQUFFLElBQUksRUFBRSxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUMsRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBQyxFQUFFO0NBQ3BFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VcIlxuaW1wb3J0IHsgQXV0aENvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvYXV0aC5jb21wb25lbnRcIlxuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSBcIi4vc2hhcmVkL3NoYXJlZC5tb2R1bGVcIlxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuICAgIE1lc3NhZ2VDb21wb25lbnQsXG4gICAgQXV0aENvbXBvbmVudFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gICAgZXhwb3J0czogY29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBSb3V0ZU1vZHVsZUNvbXBvbmVudCB7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwibWVzc2FnZXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiwgZGF0YToge2xhYmVsOiBcIkhvbWVcIn0gfSxcbiAgICB7IHBhdGg6IFwibWVzc2FnZXNcIiwgY29tcG9uZW50OiBNZXNzYWdlQ29tcG9uZW50LCBkYXRhOiB7bGFiZWw6ICdNZXNzYWdlcyd9IH0sXG4gICAgeyBwYXRoOiBcImF1dGhcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50LCBkYXRhOiB7bGFiZWw6IFwiQXV0aFwifSB9XG5dOyJdfQ==