"use strict";
var core_1 = require("@angular/core");
var dialog = require("ui/dialogs");
var nativescript_ably_1 = require("nativescript-ably");
var rxjs_1 = require('rxjs');
var MessageComponent = (function () {
    function MessageComponent(ngZone) {
        this.ngZone = ngZone;
        this.key = "I2E_JQ.-Txq1w:ZYNBrhgLfFi32Xrw";
        this.channelId = "technology";
        this.messagesReceived = new rxjs_1.Subject();
        this.message = "";
        this.status = new rxjs_1.Subject();
    }
    MessageComponent.prototype.connect = function () {
        var _this = this;
        if (this.ably == null) {
            console.info("Creating a new connection");
            this.ably = new nativescript_ably_1.AblyRealtime(this.key);
        }
        var channel = this.ably.channels.get(this.channelId);
        this.channelSubscription = this.subscribe();
        this.ably.connection.on()
            .subscribe(function (c) { return _this.ngZone.run(function () { return _this.onConnectionChange(c); }); }, this.handleError);
    };
    MessageComponent.prototype.sendMessage = function () {
        var message = this.message.trim() == "" ? "Default" : this.message;
        if (this.ably) {
            var object = JSON.stringify({ msg: message, from: "Code" });
            this.ably.channels.get(this.channelId)
                .publishData("chat", object)
                .catch(this.handleError)
                .subscribe();
        }
        else
            dialog.alert("You need to connect first");
    };
    MessageComponent.prototype.onMessage = function (message) {
        var json = JSON.parse(message);
        this.messagesReceived.next(json.from + ": " + json.msg);
    };
    MessageComponent.prototype.onConnectionChange = function (change) {
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
    MessageComponent.prototype.disconnect = function () {
        this.status.next("Disconnecting");
        if (this.ably) {
            console.info(this.ably.connection.key);
            this.ably.connection.close();
            this.ably = null;
        }
    };
    MessageComponent.prototype.unsubscribe = function () {
        if (this.channelSubscription) {
            this.channelSubscription.unsubscribe();
        }
    };
    MessageComponent.prototype.subscribe = function () {
        var _this = this;
        if (this.ably) {
            var channel = this.ably.channels.get(this.channelId);
            return channel.subscribe()
                .map(function (m) { return m.data; })
                .do(function (m) { return console.log(m); })
                .catch(this.handleError) // If the connection throws any error
                .subscribe(function (m) { return _this.ngZone.run(function () { return _this.onMessage(m); }); }, this.handleError);
        }
        else {
            return null;
        }
    };
    MessageComponent.prototype.handleError = function (e) {
        console.error("A error has catch by observer: ");
        console.error(e);
        dialog.alert(e.message);
        return rxjs_1.Observable.empty();
    };
    MessageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "my-message",
            templateUrl: "./message.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], MessageComponent);
    return MessageComponent;
}());
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.component.js.map