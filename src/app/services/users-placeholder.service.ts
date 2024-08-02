import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
    
})
export class UsersPlaholderService {

    constructor (private readonly _httpClient: HttpClient){}


    getUsers(): Observable<any>{
        return this._httpClient.get<Observable<any>>("https://jsonplaceholder.typicode.com/users");
         
    }


}