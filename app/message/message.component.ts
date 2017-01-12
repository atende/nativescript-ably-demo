import { Component, NgZone } from "@angular/core";
import * as dialog from "ui/dialogs";
import { AblyRealtime, ConnectionStateChange } from "nativescript-ably";
import { Observable, Subject, Subscription } from "rxjs";

declare var java: any;
@Component({
    moduleId: module.id,
    selector: "my-message",
    templateUrl: "./message.component.html",
})
export class MessageComponent {
    private ably: AblyRealtime
    key = "I2E_JQ.ypqBeg:XbiKg42L_eMeO4Pj"
    channelId = "technology"
    messagesReceived = new Subject<string>()
    message = ""
    status = new Subject<string>()
    channelSubscription: Subscription;
    icon = ""
    history = []
    worker: Worker
    constructor(private ngZone: NgZone) {
        this.worker = new Worker("./worker")
        this.worker.onmessage = (msg) => {
            // this.history = msg.data.items()
            this.history = msg.data
            dialog.alert(this.history)
            this.worker.terminate()
        }
        this.worker.onerror = (e) => {
            console.error("Fuck: " + e.message);
        }
    }
    ngOnInit() {
        this.icon = String.fromCharCode(0xe963)
        this.connect()
    }
    ngOnDestroy() {
        if (this.worker != null) {
            this.worker.terminate()
        }
    }
    public connect() {
        if (this.ably == null) {
            console.info("Creating a new connection")
            this.ably = new AblyRealtime(this.key)
        }

        this.channelSubscription = this.subscribe()

        this.ably.connection.on()
            .subscribe(c => this.ngZone.run(() => this.onConnectionChange(c)), this.handleError)

    }

    public sendMessage() {
        let message = this.message.trim() == "" ? "Default" : this.message
        if (this.ably) {
            let object = JSON.stringify({ msg: message, from: "Code" })
            this.ably.channels.get(this.channelId)
                .publishData("chat", object)
                .catch(this.handleError)
                .subscribe()
        }
        else
            dialog.alert("You need to connect first")
    }

    public onMessage(message: any) {
        let json = message
        this.messagesReceived.next(json.from + ": " + json.msg)
    }

    public onConnectionChange(change: ConnectionStateChange) {
        this.status.next(change.current)

        console.info("Connection Change State")
        if (change.current == "connecting") {

            console.info("We are connecting to the server")
        }
        try {
            console.log(change.current)
            console.log(change.reason)
        } catch (ex) {
            console.error(ex)
        }
    }

    public disconnect() {
        this.status.next("Disconnecting")
        if (this.ably) {
            console.info(this.ably.connection.key)
            this.ably.connection.close()
            this.ably = null;
        }
    }

    unsubscribe() {
        if (this.channelSubscription) {
            this.channelSubscription.unsubscribe()
        }
    }
    subscribe() {
        if (this.ably) {
            let channel = this.ably.channels.get(this.channelId)
            return channel.subscribe()
                .map(m => m.data)
                .map(m => JSON.parse(m))
                .do((m) => console.log(m))
                .catch(this.handleError) // If the connection throws any error
                .subscribe(m => this.ngZone.run(() => this.onMessage(m)))

        } else {
            return null;
        }
    }

    getHistory() {
        this.ngZone.runOutsideAngular(() => {
            console.info("Try running the worker")
            let channel:any = this.ably.channels.get(this.channelId)
            this.worker.postMessage(channel.facade)

        })

    }

    handleError(e) {
        console.error("A error has catch by observer: ")
        console.error(e)
        dialog.alert(e.message)
        return Observable.empty()
    }
}
