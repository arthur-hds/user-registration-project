import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';
import { GenresService } from './services/genres.service';
import { StatesService } from './services/states.service';
import { State } from './types/state.type';
import { Genre } from './types/genre.type';
import { User } from './types/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService,
    private readonly _statesService: StatesService
  ){}

  states$!: Observable<State>
  states: any = []


  genres$!: Observable<Genre>
  genres: any = []


  users$!: Observable<User>
  users: any = []

  ngOnInit() {
    this.getUsers();
    this.getGenres();
    this.getStates();
  }


  private getUsers() {
    this.users$ = this._userService.getUsers()
    return this.users$.subscribe((users) => {
        this.users = users;
        console.log(this.users)
    });
  }


  private getGenres(){
    this.genres$ = this._genresService.getGenres()
    return this.genres$.subscribe((genres) => {
        this.genres = genres;
        console.log(this.genres)
    })


  }


  private getStates(){
    this.states$ = this._statesService.getStates();
    return this.states$.subscribe((states) => {
      this.states = states
      console.log(this.states)

    })


  }






}
