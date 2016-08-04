import {Component, NgZone} from "@angular/core";
import * as dialog from "ui/dialogs";
import {AblyRealtime, Message, ConnectionStateChange, ConnectionState} from "nativescript-ably"
import {Observable, Subject} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
declare var java: any;
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    private ably: AblyRealtime
    key = "I2E_JQ.tmuqtg:GXNuC29zQcu48Lez"
    channelId = "technology"
    messagesReceived = new Subject<string>()
    message = ""
    status = new Subject<string>()
    constructor(private ngZone: NgZone){

    }
    public connect() {
        this.ably = new AblyRealtime(this.key)

        let channel = this.ably.channels.get(this.channelId)

        channel.subscribe()
            .map(m => m.data)
            .do((m) => console.log(m))
            .subscribe(m => this.ngZone.run(() => this.onMessage(m)))

        this.ably.connection.on().subscribe(c => this.ngZone.run(() => this.onConnectionChange(c)))
    }

    public sendMessage() {

        if (this.ably) {
            let object = JSON.stringify({msg: this.message, from: "Code"})
            this.ably.channels.get(this.channelId)
                .publishData("chat", object)
                .subscribe()
        }
        else
            dialog.alert("You need to connect first")
    }

    public onMessage(message: any) {
        let json = JSON.parse(message)
        this.messagesReceived.next(json.from + ": " +json.msg)
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
            this.ably.connection.close()
            this.ably = null;
        }

    }
}
