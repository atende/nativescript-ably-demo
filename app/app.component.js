"use strict";
var core_1 = require("@angular/core");
var dialog = require("ui/dialogs");
var nativescript_ably_1 = require("nativescript-ably");
var rxjs_1 = require('rxjs');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var AppComponent = (function () {
    function AppComponent(ngZone) {
        this.ngZone = ngZone;
        this.key = "I2E_JQ.IoeWDw:WrRgJ5LEUCCIm5Tp";
        this.channelId = "technology";
        this.message = new rxjs_1.Subject();
        this.status = new rxjs_1.Subject();
    }
    AppComponent.prototype.connect = function () {
        var _this = this;
        this.ably = new nativescript_ably_1.AblyRealtime(this.key);
        var channel = this.ably.channels.get(this.channelId);
        channel.subscribe()
            .map(function (m) { return m.data; })
            .do(function (m) { return console.log(m); })
            .subscribe(function (m) { return _this.ngZone.run(function () { return _this.onMessage(m); }); });
        this.ably.connection.on().subscribe(function (c) { return _this.ngZone.run(function () { return _this.onConnectionChange(c); }); });
    };
    AppComponent.prototype.sendMessage = function () {
        if (this.ably) {
            var object = JSON.stringify({ msg: "Hello from code", from: "Code" });
            this.ably.channels.get(this.channelId)
                .publishData("chat", object)
                .subscribe();
        }
        else
            dialog.alert("You need to connect first");
    };
    AppComponent.prototype.onMessage = function (message) {
        var json = JSON.parse(message);
        this.message.next(json.from + ": " + json.msg);
    };
    AppComponent.prototype.onConnectionChange = function (change) {
        this.status.next(change.current);
        console.info("Connection Change State");
        if (change.current == "connecting") {
            console.info("We are connecting to the server");
        }
        try {
            console.log(change.current);
            console.log(change.reason);
        }
        catch (ex) {
            console.error(ex);
        }
    };
    AppComponent.prototype.disconnect = function () {
        this.status.next("Disconnecting");
        if (this.ably) {
            this.ably.connection.close();
            this.ably = null;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map