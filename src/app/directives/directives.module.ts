import { NgModule } from "@angular/core";
import { EmailInputValidator } from "./email-input-validator.directive";

@NgModule({

    declarations: [
        EmailInputValidator
    ],
    exports: [
        EmailInputValidator
    ]
})
export class DirectivesModule {

}