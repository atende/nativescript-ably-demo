import {Routes} from "@angular/router"
import {MessageComponent} from "./message"
import {TestComponent} from "./test/test.component"

export const routes: Routes = [
    { path: "", redirectTo: "messages", pathMatch: "full"},
    { path: "messages", component: MessageComponent },
    { path: "test", component: TestComponent }
];