import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyWorker, MyWorkerType } from '../../shared/models/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  mask = ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  workerForm:FormGroup;
  disabledForms = false;
  myWorkerType= MyWorkerType;

  @Output() addWorker=
  new EventEmitter<MyWorker>();

  constructor() { 
    this.workerForm = new FormGroup({
      name: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      surname: new FormControl({ value: '', disabled: this.disabledForms }, [
        Validators.required,
      ]),
      phone: new FormControl({value: '', disabled: this.disabledForms}, [
        Validators.required,
      ]),
      type: new FormControl(
        { value: MyWorkerType.programmer, disabled: this.disabledForms }
      )
      
    });
  }

  ngOnInit():void  {
  }

  submit(){
    this.addWorker.emit(this.workerForm.value);
}

}
