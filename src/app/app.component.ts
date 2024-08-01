import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Observable } from 'rxjs';
import { GenresService } from './services/genres.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private readonly _userService: UsersService,
    private readonly _genresService: GenresService
  ){}

  genres$!: Observable<any>
  genres: any = []


  users$!: Observable<any>
  users: any = []

  ngOnInit() {
    this.getUsers();
    this.getGenres();
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






}
