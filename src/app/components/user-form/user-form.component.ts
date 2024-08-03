import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Genre } from '../../types/genre.type';
import { User } from '../../types/user.type';
import { IUser } from '../../interfaces/user/user.interface';
import { State } from '../../types/state.type';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges{

  @Input("genresList")
  genresList: Genre = [];

  @Input("userSelected")
  userSelected: IUser = {} as IUser;

  @Input("statesList")
  statesList: State = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }





}
