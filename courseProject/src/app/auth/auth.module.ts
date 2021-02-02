import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

@NgModule({
    declarations:[AuthComponent],
    imports:[AuthRoutingModule, FormsModule, ReactiveFormsModule, SharedModule]
})
export class AuthModule{

}