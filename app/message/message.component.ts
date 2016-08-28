import {Component, NgZone} from "@angular/core";
import * as dialog from "ui/dialogs";
import {AblyRealtime, Message, ConnectionStateChange, ConnectionState} from "nativescript-ably"
import {Observable, Subject, Subscription} from 'rxjs';

declare var java: any;
@Component({
    moduleId: module.id,
    selector: "my-message",
    templateUrl: "./message.component.html",
})
export class MessageComponent {
    private ably: AblyRealtime
    key = "I2E_JQ.-Txq1w:ZYNBrhgLfFi32Xrw"
    channelId = "technology"
    messagesReceived = new Subject<string>()
    message = ""
    status = new Subject<string>()
    channelSubscription: Subscription;

    constructor(private ngZone: NgZone) {

    }
    public connect() {
        if (this.ably == null) {
            console.info("Creating a new connection")
            this.ably = new AblyRealtime(this.key)
        }

        let channel = this.ably.channels.get(this.channelId)

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
        let json = JSON.parse(message)
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
                .do((m) => console.log(m))
                .catch(this.handleError) // If the connection throws any error
                .subscribe(m => this.ngZone.run(() => this.onMessage(m)), this.handleError)

        }else{
            return null;
        }
    }

    handleError(e) {
        console.error("A error has catch by observer: ")
        console.error(e)
        dialog.alert(e.message)
        return Observable.empty()
    }
}
