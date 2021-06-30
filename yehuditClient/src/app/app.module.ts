import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EnterComponent } from './components/enter/enter.component';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { ChildPersonComponent } from './components/child-person/child-person.component';
import { FormsModule } from '@angular/forms';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component'
import { MatIconModule } from "@angular/material/icon";
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    EnterComponent,
    FormPersonComponent,
    ChildPersonComponent,
    ShowErrorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', component: EnterComponent },
      { path: 'form', component: FormPersonComponent },
    ])
  ],
  providers: [  DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
