import { Component } from "@angular/core";
import { AblyRealtime } from "nativescript-ably";

@Component({
    moduleId: module.id,
    selector: 'app-auth',
    templateUrl: 'auth.component.html'
})
export class AuthComponent {
    ably: AblyRealtime
    constructor(){
        this.ably = new AblyRealtime({authUrl: 'http://my.website.com/auth'})
    }

    createRequestToken(){
        // this.ably.auth.createTokenRequest({clientId: 'id'}, function(err, tokenRequest){

        // })
    }
}