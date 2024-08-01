import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(private readonly _userService: UsersService){}

  users$!: Observable<any>

  ngOnInit() {
    this.getUsers();
  }


  getUsers() {
    this.users$ = this._userService.getUsers()
    return this.users$.subscribe((users) => {
        console.log(users)
    });
  }




}
