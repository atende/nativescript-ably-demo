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
//# sourceMappingURL=auth.component.js.map