import { Component, Input, LOCALE_ID, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Genre } from '../../types/genre.type';
import { User } from '../../types/user.type';
import { IUser } from '../../interfaces/user/user.interface';
import { State } from '../../types/state.type';
import { getPasswordValue } from '../utils/get-password-strength-value';
import { convertDateToPtBrDatepicker } from '../utils/convert-date-to-pt-br-datepicker';
import { convertDateObjToPtBr } from '../utils/convert-date-obj-to-pt-br';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  
})
export class UserFormComponent implements OnChanges, OnInit{

  minDate: Date | null = null;

  maxDate: Date | null = null;

  userDate: Date | null = null;

  displayedColumns = ["title", "band", "genre", "favorite"]



  @Input("genresList")
  genresList: Genre = [];

  @Input("userSelected")
  userSelected: IUser = {} as IUser;

  @Input("statesList")
  statesList: State = [];


  passwordValue: number = 0;



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const USER_CHANGED = changes['userSelected']

    if(USER_CHANGED){
      this.onPasswordChange(this.userSelected.password)
      this.setDateToDatepicker(this.userSelected.birthDate);
    }

  }


  private setDateToDatepicker(birthDate: string) {
    this.userDate = convertDateToPtBrDatepicker(birthDate)
  }


  onDateChange(event: MatDatepickerInputEvent<any, any>){
    if(!event.value){
      return;
    }
    this.userSelected.birthDate = convertDateObjToPtBr(event.value);
    console.log(this.userSelected.birthDate)

  }


  onPasswordChange(password: string){
    this.passwordValue = getPasswordValue(password);


  }


  
  private setDefaultToDatePicker(){
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1)
    this.maxDate = new Date()
  }

  ngOnInit(){
    this.setDefaultToDatePicker()
  }



}
