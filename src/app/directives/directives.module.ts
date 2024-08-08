import { NgModule } from "@angular/core";
import { EmailInputValidatorDirective } from "./email-input-validator.directive";
import { CredentialsValidatorDirective } from "./credentials-validator.directive";
import { PasswordStrengthValidatorDirective } from "./password-strength-validator.directive";
import { PasswordConfirmationValidatorDirective } from "./password-confirmation-validator.directive";

@NgModule({

    declarations: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective,
        PasswordStrengthValidatorDirective,
        PasswordConfirmationValidatorDirective
    ],
    exports: [
        EmailInputValidatorDirective,
        CredentialsValidatorDirective,
        PasswordStrengthValidatorDirective,
        PasswordConfirmationValidatorDirective
    ]
})
export class DirectivesModule {

}