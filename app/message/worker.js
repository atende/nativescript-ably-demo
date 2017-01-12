"use strict";
require("globals");
require("rxjs/add/observable/empty");
var channelSubscription;
var channelId;
var key;
var ably;
self.onmessage = function (msg) {
    console.log("Worker started bla");
    console.info(JSON.stringify(msg.data));
    console.info(msg.data.history());
    sendBack("What fuck");
    // try {
    //     key = msg.data.key
    //     channelId = msg.data.channelId
    //     connect()   
    // } catch (e) {
    //     console.error("Caralhooooooo !" + e.message)
    // }
};
self.onerror = function (e) {
    console.log("An error occurred in worker. Main will handle this. Err: " + e);
    // return true to not propagate to main
};
function sendBack(message) {
    self.postMessage(message);
}
function connect() {
    if (ably == null) {
        console.info("Creating a new connection in worker");
        ably = new io.ably.lib.realtime.AblyRealtime(key);
    }
    // this.ably.connection.on()
    //     .subscribe(c => () => this.onConnectionChange(c), this.handleError)
}
// function onConnectionChange(change: ConnectionStateChange) {
//     console.info("Connection Change State in worker")
//     if (change.current == "connecting") {
//         console.info("We are connecting to the server")
//     }
//     if (change.current == "connected") {
//         let androidParams = new io.ably.lib.types.Param("untilAttach", "true")
//         let channel: any = this.ably.channels.get(channelId)
//         let object = channel.history(androidParams)
//         let p = <any>self;
//         p.postMessage(object.items())
//     }
//     try {
//         console.log(change.current)
//         console.log(change.reason)
//     } catch (ex) {
//         console.error(ex)
//     }
// }
// function handleError(e) {
//     console.error("A error has catch by observer: ")
//     console.error(e)
//     return Observable.empty()
// } 
//# sourceMappingURL=worker.js.map