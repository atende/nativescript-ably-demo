import { Component, NgZone, OnInit, OnDestroy } from "@angular/core";
import * as dialog from "ui/dialogs";
import { AblyRealtime, ConnectionStateChange } from "nativescript-ably";
import {Param} from "nativescript-ably/api/common"
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject"
import "rxjs/add/observable/empty";

declare var java: any;
@Component({
    moduleId: module.id,
    selector: "my-message",
    templateUrl: "./message.component.html",
})
export class MessageComponent implements OnInit, OnDestroy {
    private ably: AblyRealtime
    key = "I2E_JQ.m_j9kQ:Lhq1HyC3KUF9doOo"
    channelId = "technology"
    messagesReceived = new Subject<string>()
    message = ""
    status = new Subject<string>()
    channelSubscription: Subscription;
    icon = ""
    history = []
    constructor(private ngZone: NgZone) {

    }
    ngOnInit() {
        this.icon = String.fromCharCode(0xe963)
        this.connect()
    }
    ngOnDestroy() {
        this.channelSubscription.unsubscribe()
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
        console.info("Getting history")

        try {
            let param = new Param("untilAttach", "true")

            let params = [param]
            this.ngZone.runOutsideAngular(() => {
                if (this.ably) {
                    this.ably.channels.get(this.channelId).history(params).then(_ => {
                        this.history = _
                        dialog.alert(JSON.stringify(_))
                    }).catch(_ => dialog.alert(_))
                }
            })

        }catch(e) {
            console.error(e)
        }
        
    }

    handleError(e) {
        console.error("A error has catch by observer: ")
        console.error(e)
        dialog.alert(e.message)
        return Observable.empty()
    }
}
