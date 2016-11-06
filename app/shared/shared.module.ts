import {NgModule} from "@angular/core"
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

const imports = [
        NativeScriptModule,
        NativeScriptFormsModule,
    ]

@NgModule({
    imports: imports ,
    exports: imports
})
export class SharedModule {

}