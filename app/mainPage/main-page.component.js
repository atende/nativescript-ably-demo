"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var MainComponent = (function () {
    function MainComponent(page, _changeDetectionRef) {
        this.page = page;
        this._changeDetectionRef = _changeDetectionRef;
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
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent), 
        __metadata('design:type', angular_1.RadSideDrawerComponent)
    ], MainComponent.prototype, "drawerComponent", void 0);
    MainComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ably-demo',
            directives: [router_1.ROUTER_DIRECTIVES, router_2.NS_ROUTER_DIRECTIVES],
            templateUrl: 'main-page.component.html',
            styleUrls: ['main-page.component.css']
        }),
        __param(0, core_1.Inject(page_1.Page)), 
        __metadata('design:paramtypes', [page_1.Page, core_1.ChangeDetectorRef])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main-page.component.js.map