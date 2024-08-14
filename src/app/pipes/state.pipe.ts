import { Pipe, PipeTransform } from "@angular/core";
import { StatesService } from "../services/states.service";
import { map, Observable } from "rxjs";
import { State } from "../types/state.type";

@Pipe({
    name: "state"
})
export class StatePipe implements PipeTransform {

    constructor(private readonly _stateService: StatesService){}

    transform(value: number): Observable<string> {
        
        const statesList: Observable<State> = this._stateService.getStates();

        return statesList.pipe(
            map(states => {
                const stateFounded = states.find( state => state.id === value )?.descricao

                return stateFounded ? stateFounded : '';



            })

        )


      



    }
    
}