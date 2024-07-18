import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormModel } from '../models/form.model';
import { UnitIdService } from './unit-id.service';
import { LineIdService } from './line-id.service';
import { GroupIdService } from './group-id.service';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class FormInitializationService {

  constructor(
    private http: HttpClient,
    private unitIdService: UnitIdService,
    private lineIdService: LineIdService,
    private groupIdService: GroupIdService,
    private logger: NGXLogger
  ) {}

  initializeForm(): Observable<FormModel> {
    this.logger.info('Initializing form');
    // Logic to initialize the form
    const formModel: FormModel = {
      mainWindowState: 'maximized',
      partMasterWindowState: 'normal',
      title: 'T K A P - [IS]',
      screenName: 'PART_MASTER',
      sysDate: new Date().toLocaleDateString(),
      mode: this.getMode(),
      cursorStyle: 'default',
      saveButtonEnabled: false,
      fields: {
        groupId: { enabled: true },
        partNo: { enabled: true },
        partStatus: { enabled: true },
        partDesc: { enabled: true },
        lineId: { enabled: true },
        unitId: { enabled: true }
      }
    };
    return of(formModel);
  }

  validateField(fieldName: string, fieldValue: any): string | null {
    this.logger.info(`Validating field: ${fieldName}`);
    if (fieldValue == null) {
      return `${fieldName} cannot be null`;
    }
    return null;
  }

  validateAllFields(fields: { [key: string]: any }): string[] {
    this.logger.info('Validating all fields');
    const errors: string[] = [];
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        const error = this.validateField(field, fields[field]);
        if (error) {
          errors.push(error);
        }
      }
    }
    return errors;
  }

  handleUnitIdClick(event: Event, globalParam: any): void {
    this.logger.info('Handling Unit ID click');
    this.unitIdService.handleUnitIdClick(event, globalParam);
  }

  handleUnitIdDoubleClick(event: Event, globalParam: any): void {
    this.logger.info('Handling Unit ID double click');
    this.unitIdService.handleUnitIdDoubleClick(event, globalParam);
  }

  handleUnitIdValidation(globalParam: any): void {
    this.logger.info('Handling Unit ID validation');
    this.unitIdService.handleUnitIdValidation(globalParam);
  }

  fetchGroupLOV(): Observable<any> {
    this.logger.info('Fetching Group LOV');
    return this.groupIdService.fetchGroupLOV();
  }

  fetchEditGroupLOV(): Observable<any> {
    this.logger.info('Fetching Edit Group LOV');
    return this.groupIdService.fetchEditGroupLOV();
  }

  validateGroupID(groupId: string, groupName: string): Observable<any> {
    this.logger.info('Validating Group ID');
    return this.groupIdService.validateGroupID(groupId, groupName);
  }

  saveData(): void {
    this.logger.info('Saving data');
    // Logic to save data
  }

  clearData(): void {
    this.logger.info('Clearing data');
    // Logic to clear data
  }

  editData(): void {
    this.logger.info('Editing data');
    // Logic to edit data
  }

  exitForm(): void {
    this.logger.info('Exiting form');
    // Logic to exit form
  }

  resetForm(): void {
    this.logger.info('Resetting form');
    // Logic to reset form fields to default values
  }

  private getMode(): string {
    // Logic to determine the mode (Create or Edit) based on a global parameter
    const globalParam = 0; // Example global parameter
    return globalParam === 0 ? 'Create' : 'Edit';
  }
}
