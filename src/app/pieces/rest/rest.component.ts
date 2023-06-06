import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent {


  constructor(private fb: FormBuilder,
             private _sb: MatSnackBar) {}

             private ngUnsubscribe = new Subject<void>();

  //Form Builder

  itemValues = this.fb.group({
    nameProd: ['Drill',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    priceProd: ['',]
  } );

  name(){return this.itemValues.value.nameProd;}
  price(){return this.itemValues.value.priceProd;}
  isValid(){return this.itemValues.valid;}

  submitted(){
    alert(`You submitted : ${this.name()} and ${this.price()}`);

  }

  //Product Info tooltip

  info = {
    name: `Input a name between 5 and 24 characters.`,

  };







  //----------------

  //form validation && pop up snack bar as a notice

  nameValidity(){
    return (this.name.length<4 ||this.name.length>25 )? true : false;
  }

  snackbarPopUpOnInvalid(){
    this.itemValues.statusChanges
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(
      (x)=>{this.switchY(x) }
    );
  }

  switchY(x:any){
    if(x=='INVALID'){
      this._sb.open("The name needs to be longer than 4 characters.","X", {duration: 3000});
    }
  }

  //----------------


  // lifecycles

  ngOnInit(){
    console.log("nginit");
    //this.validityChecker();
    this.snackbarPopUpOnInvalid();
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



/*
  RESTfirstTry(){


  const request$ = new Observable(observer => {
    fetch(https://backside-1ad41-default-rtdb.firebaseio.com/)
    .then(response => {
      return response.ok ? response.text() : '';
    })
    .then(result => {
      if (result) {
        observer.next(result);
        observer.complete();
      } else {
        observer.error('An error has occured');
      }
    });
  });
  }

  */






}
