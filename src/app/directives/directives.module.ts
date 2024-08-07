import { NgModule } from "@angular/core";
import { EmailInputValidatorDirective } from "./email-input-validator.directive";
import { CredentialsValidatorDirective } from "./credentials-validator.directive";
import { PasswordStrengthValidatorDirective } from "./password-strength-validator.directive";

@NgModule({

    declarations: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective,
        PasswordStrengthValidatorDirective
    ],
    exports: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective,
        PasswordStrengthValidatorDirective
    ]
})
export class DirectivesModule {

}