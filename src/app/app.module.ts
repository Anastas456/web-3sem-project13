import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableWorkersComponent } from './ui/table-workers/table-workers.component';
import { AddformWorkerComponent } from './ui/addform-worker/addform-worker.component';
import { EditWorkerComponent } from './ui/edit-worker/edit-worker.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    AppComponent,
    TableWorkersComponent,
    AddformWorkerComponent,
    EditWorkerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
