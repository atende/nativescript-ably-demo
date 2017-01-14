"use strict";
var core_1 = require("@angular/core");
var nativescript_ably_1 = require("nativescript-ably");
var AuthComponent = (function () {
    function AuthComponent() {
        this.ably = new nativescript_ably_1.AblyRealtime({ authUrl: 'http://my.website.com/auth' });
    }
    AuthComponent.prototype.createRequestToken = function () {
        // this.ably.auth.createTokenRequest({clientId: 'id'}, function(err, tokenRequest){
        // })
    };
    AuthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-auth',
            templateUrl: 'auth.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLGtDQUE2QixtQkFBbUIsQ0FBQyxDQUFBO0FBT2pEO0lBRUk7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksZ0NBQVksQ0FBQyxFQUFDLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxDQUFDLENBQUE7SUFDekUsQ0FBQztJQUVELDBDQUFrQixHQUFsQjtRQUNJLG1GQUFtRjtRQUVuRixLQUFLO0lBQ1QsQ0FBQztJQWZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUscUJBQXFCO1NBQ3JDLENBQUM7O3FCQUFBO0lBWUYsb0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHFCQUFhLGdCQVd6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFibHlSZWFsdGltZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYWJseVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnYXBwLWF1dGgnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXV0aC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCB7XG4gICAgYWJseTogQWJseVJlYWx0aW1lXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5hYmx5ID0gbmV3IEFibHlSZWFsdGltZSh7YXV0aFVybDogJ2h0dHA6Ly9teS53ZWJzaXRlLmNvbS9hdXRoJ30pXG4gICAgfVxuXG4gICAgY3JlYXRlUmVxdWVzdFRva2VuKCl7XG4gICAgICAgIC8vIHRoaXMuYWJseS5hdXRoLmNyZWF0ZVRva2VuUmVxdWVzdCh7Y2xpZW50SWQ6ICdpZCd9LCBmdW5jdGlvbihlcnIsIHRva2VuUmVxdWVzdCl7XG5cbiAgICAgICAgLy8gfSlcbiAgICB9XG59Il19