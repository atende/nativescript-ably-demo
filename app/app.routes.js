"use strict";
var message_1 = require("./message");
var test_component_1 = require("./test/test.component");
var router_1 = require('nativescript-angular/router');
var routes = [
    { path: "", redirectTo: "/messages", terminal: true },
    { path: "messages", component: message_1.MessageComponent },
    { path: "test", component: test_component_1.TestComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.nsProvideRouter(routes, { enableTracing: false })
];
//# sourceMappingURL=app.routes.js.map