import { NgModule } from "@angular/core";
import { EmailInputValidatorDirective } from "./email-input-validator.directive";
import { CredentialsValidatorDirective } from "./credentials-validator.directive";

@NgModule({

    declarations: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective
    ],
    exports: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective
    ]
})
export class DirectivesModule {

}