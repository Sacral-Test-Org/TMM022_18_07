// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FormInitializationComponent } from './components/form-initialization/form-initialization.component';
import { UnitIdComponent } from './components/unit-id/unit-id.component';
import { GroupIdComponent } from './components/group-id/group-id.component';
import { PartNumberComponent } from './components/part-number/part-number.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ExitConfirmationDialogComponent } from './components/exit-confirmation-dialog/exit-confirmation-dialog.component';

import { PartService } from './services/part.service';
import { UnitIdService } from './services/unit-id.service';
import { GroupIdService } from './services/group-id.service';
import { FormInitializationService } from './services/form-initialization.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormInitializationComponent,
    UnitIdComponent,
    GroupIdComponent,
    PartNumberComponent,
    ButtonsComponent,
    ExitConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    })
  ],
  providers: [
    PartService,
    UnitIdService,
    GroupIdService,
    FormInitializationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
