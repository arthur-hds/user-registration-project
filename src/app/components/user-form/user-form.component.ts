import { Component, ElementRef, EventEmitter, Input, LOCALE_ID, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Genre } from '../../types/genre.type';
import { User } from '../../types/user.type';
import { IUser } from '../../interfaces/user/user.interface';
import { State } from '../../types/state.type';
import { getPasswordValue } from '../utils/get-password-strength-value';
import { convertDateToPtBrDatepicker } from '../utils/convert-date-to-pt-br-datepicker';
import { convertDateObjToPtBr } from '../utils/convert-date-obj-to-pt-br';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  
})
export class UserFormComponent implements OnChanges, OnInit{


  constructor(private readonly _el: ElementRef){}


  minDate: Date | null = null;

  maxDate: Date | null = null;

  userDate: Date | null = null;

  displayedColumns = ["title", "band", "genre", "favorite"]

  filteredGenreList: Genre = [];


  @Input("genresList")
  genresList: Genre = [];

  @Input("userSelected")
  userSelected: IUser = {} as IUser;

  @Input("statesList")
  statesList: State = [];

  @Output("onFormSubmit")
  formSubmit = new EventEmitter<void>();


  passwordValue: number = 0;



  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const USER_CHANGED = changes['userSelected']

    if(USER_CHANGED){
      this.onPasswordChange(this.userSelected.password)
      this.setDateToDatepicker(this.userSelected.birthDate);
      this.filteredGenreList = this.genresList;
    }

  }

  onFormSubmit(form: NgForm){

    if(form.invalid){
      this.onFormSubmitInvalid(form);

      return;
    }

    this.formSubmit.emit();

  }


  private onFormSubmitInvalid(form: NgForm){
    const keys = Object.keys(form.controls);

    for(const control of keys){
      const IS_CONTROL_INVALID = form.controls[control].invalid;

      if(IS_CONTROL_INVALID){
        const invalidElement: HTMLElement = this._el.nativeElement.querySelector(`[name=${control}]`);
        
        invalidElement.focus();

        break;
      }

      



    }


  }


  isAnyCheckboxChecked(){
    return this.userSelected.musics.some(music => music.isFavorite);


  }



  displayFn(genreId: number): string  {
    const genreFound = this.genresList.find(genre => genre.id === genreId);
    return genreFound ? genreFound.description : '';


  }


  filterGenre(genreInput: string) {

    if(typeof genreInput === "number") return;

    const genreInputLower = genreInput.toLowerCase();
    this.filteredGenreList = this.genresList.filter(
      genre => genre.description.toLowerCase().includes(genreInputLower)
    )



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
