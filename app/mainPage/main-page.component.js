"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var app_routes_1 = require("../app.routes");
var MainComponent = (function () {
    function MainComponent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
        this.routes = app_routes_1.routes;
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    MainComponent.prototype.ngOnInit = function () {
        this.icon = String.fromCharCode(0xe903);
    };
    MainComponent.prototype.changeDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    MainComponent.prototype.extractTextLabelFromRouteData = function (route) {
        if (route.data == undefined || route.data == null || route.data['label'] == undefined || route.data['label'] == null) {
            return "No router text label";
        }
        else {
            return route.data['label'];
        }
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], MainComponent.prototype, "drawerComponent", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ably-demo',
            templateUrl: 'main-page.component.html',
            styleUrls: ['main-page.component.css']
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHFCQUFzRSxlQUFlLENBQUMsQ0FBQTtBQUV0RixxQkFBbUIsU0FBUyxDQUFDLENBQUE7QUFDN0Isd0JBQXFELDRDQUE0QyxDQUFDLENBQUE7QUFFbEcsMkJBQXVCLGVBRXZCLENBQUMsQ0FGcUM7QUFRdEM7SUFHSSx1QkFBa0MsSUFBVSxFQUFVLG1CQUFzQztRQUExRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUY1RixXQUFNLEdBQUksbUJBQU0sQ0FBQztJQUlqQixDQUFDO0lBSUQsdUNBQWUsR0FBZjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUE7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQ25DLENBQUM7SUFDRCxxREFBNkIsR0FBN0IsVUFBOEIsS0FBWTtRQUN0QyxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDakgsTUFBTSxDQUFDLHNCQUFzQixDQUFBO1FBQ2pDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBcEJEO1FBQUMsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs7MERBQUE7SUFadEM7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDekMsQ0FBQzttQkFJZSxhQUFNLENBQUMsV0FBSSxDQUFDOztxQkFKM0I7SUE0QkYsb0JBQUM7QUFBRCxDQUFDLEFBM0JELElBMkJDO0FBM0JZLHFCQUFhLGdCQTJCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZCwgSW5qZWN0LCBPbkluaXQsIENoYW5nZURldGVjdG9yUmVmfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhclwiO1xuaW1wb3J0IHNpZGVEcmF3ZXJNb2R1bGUgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJyk7XG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vYXBwLnJvdXRlc1wiXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdhYmx5LWRlbW8nLFxuICAgIHRlbXBsYXRlVXJsOiAnbWFpbi1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICByb3V0ZXMgPSAgcm91dGVzO1xuICAgIGljb246IFN0cmluZ1xuICAgIGNvbnN0cnVjdG9yKEBJbmplY3QoUGFnZSkgcHJpdmF0ZSBwYWdlOiBQYWdlLCBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKXtcblxuICAgIH1cbiAgICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnRcbiAgICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGVcblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgICAgICB0aGlzLmRyYXdlciAgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyXG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaWNvbiA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhlOTAzKVxuICAgIH1cbiAgICBjaGFuZ2VEcmF3ZXIoKXtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKVxuICAgIH1cbiAgICBleHRyYWN0VGV4dExhYmVsRnJvbVJvdXRlRGF0YShyb3V0ZTogUm91dGUpOiBzdHJpbmcge1xuICAgICAgICBpZihyb3V0ZS5kYXRhID09IHVuZGVmaW5lZCB8fCByb3V0ZS5kYXRhID09IG51bGwgfHwgcm91dGUuZGF0YVsnbGFiZWwnXSA9PSB1bmRlZmluZWQgfHwgcm91dGUuZGF0YVsnbGFiZWwnXSA9PSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybiBcIk5vIHJvdXRlciB0ZXh0IGxhYmVsXCJcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUuZGF0YVsnbGFiZWwnXTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=