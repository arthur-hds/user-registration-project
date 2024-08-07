import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import * as zxcvbn from "zxcvbn"

@Directive({
    selector : "[appPasswordStrengthValidator]",
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: PasswordStrengthValidatorDirective,
        multi: true
    }]
})
export class PasswordStrengthValidatorDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {
        
        const inputValue = control.value;

        if( !control || !inputValue ) return null;

        const passwordScore = zxcvbn.default(inputValue);



        console.log(passwordScore)


        const IS_PASSWORD_WEAK_OR_MEDIUM = passwordScore.score !== 4;

        return IS_PASSWORD_WEAK_OR_MEDIUM ? { "invalidPassword" : true } : null

        
  
    }
    

}