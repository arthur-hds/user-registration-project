import { Directive, forwardRef, Input } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { UsersPlaholderService } from "../services/users-placeholder.service";


@Directive(
    {
        selector: "[appCredentialsValidator]",
        providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            useExisting: forwardRef(() => CredentialsValidatorDirective),
            multi: true
        }
        ]
    }
)
export class CredentialsValidatorDirective implements AsyncValidator{


    @Input("appCredentialsValidator") 
    propToCheck: "username" | "email" = "username";

    constructor(private readonly usersPlaceholderService: UsersPlaholderService){}


    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        
        const inputValue = control.value.trim().toLowerCase()


        return this.usersPlaceholderService.getUsers().pipe(
            map((users) => {

                const hasEmail = users.find(
                    (usersSingleValue) => usersSingleValue[this.propToCheck].toLowerCase() === inputValue)

                const validatorKey = this.propToCheck === "username" ? "invalidAlreadyUsername" : "invalidAlreadyEmail"

                return hasEmail ? { [validatorKey] : true } : null;


            })
        )


    }
    


    



}