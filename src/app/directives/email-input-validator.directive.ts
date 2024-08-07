import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[appEmailInputValidator]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EmailInputValidatorDirective,
            multi: true
        }
    ]
})
export class EmailInputValidatorDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {
        const inputValue = control.value
        const emailPattern = /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,}$/;

        const IS_VALID_EMAIL = emailPattern.test(inputValue)

        console.log(IS_VALID_EMAIL)

        return IS_VALID_EMAIL ? null : {"invalidEmail" : true}

    }




}