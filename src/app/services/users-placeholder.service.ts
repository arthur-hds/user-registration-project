import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserPlaceholderResponse } from "../types/user-placeholder-response.type";

@Injectable({
    providedIn: 'root',
    
})
export class UsersPlaholderService {

    constructor (private readonly _httpClient: HttpClient){}


    getUsers(): Observable<UserPlaceholderResponse>{
        return this._httpClient.get<UserPlaceholderResponse>("https://jsonplaceholder.typicode.com/users");
         
    }


}