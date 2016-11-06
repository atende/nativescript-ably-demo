"use strict";
var message_1 = require("./message");
var test_component_1 = require("./test/test.component");
exports.routes = [
    { path: "", redirectTo: "messages", pathMatch: "full" },
    { path: "messages", component: message_1.MessageComponent },
    { path: "test", component: test_component_1.TestComponent }
];
//# sourceMappingURL=app.routes.js.map