import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types/user.type';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrl: './user-card-list.component.scss'
})
export class UserCardListComponent {

  @Input("usersList")
  usersList: User = [];

  @Output("onUserSelected")
  onUserSelected = new EventEmitter<number>;

  onClick(index: number) {

      return this.onUserSelected.emit(index);


  }

  
}
