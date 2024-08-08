import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: "[appPasswordConfirmationValidator]",
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: PasswordConfirmationValidatorDirective,
            multi: true
        }
    ]

})
export class PasswordConfirmationValidatorDirective implements Validator{

    validate(control: AbstractControl): ValidationErrors | null {



        const passwordInput = control.get('passwordInput');
        const passwordConfirmationInput = control.get('ConfirmPasswordInput');

        
        

        if(!passwordInput || !passwordConfirmationInput){
            return null
        }


        const passwordInputValue = passwordInput.value
        const passwordConfirmationInputValue = passwordConfirmationInput.value



        const errorValueJSON = {"invalidPasswordConfirmation": true}


        if(passwordInputValue === passwordConfirmationInputValue){
            passwordConfirmationInput.setErrors(null)
            return null
        }
        

        passwordConfirmationInput.setErrors(errorValueJSON)
        return errorValueJSON
    }
   


}