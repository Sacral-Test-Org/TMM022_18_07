import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NGXLogger } from 'ngx-logger';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ButtonsService {

  constructor(private http: HttpClient, private logger: NGXLogger, private router: Router) { }

  saveData(data: any): void {
    this.logger.info('Save button clicked');
    this.http.post('api/save', data).subscribe(
      response => {
        this.logger.info('Data saved successfully', response);
      },
      error => {
        this.logger.error('Error saving data', error);
      }
    );
  }

  clearData(form: any): void {
    this.logger.info('Clear button clicked');
    form.reset();
  }

  editData(data: any): void {
    this.logger.info('Edit button clicked');
    // Assuming data is an object with properties that need to be edited
    // Example: Enable form fields for editing
    data.isEditable = true;
  }

  exitForm(): void {
    this.logger.info('Exit button clicked');
    this.router.navigate(['/home']);
  }
}
