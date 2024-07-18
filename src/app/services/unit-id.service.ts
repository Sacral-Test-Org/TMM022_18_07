import { Injectable } from '@angular/core';
import { FormInitializationService } from './form-initialization.service';
import { Event } from '@angular/router';
import { GlobalParameter } from '../models/global-parameter.model';

@Injectable({
  providedIn: 'root'
})
export class UnitIdService {

  constructor(private formInitializationService: FormInitializationService) { }

  handleClick(event: Event, globalParameter: GlobalParameter): void {
    // Business logic for handling click event on Unit ID field
    const saveButton = document.getElementById('saveButton');
    const unitNameField = document.getElementById('unitNameField') as HTMLInputElement;
    const groupIdField = document.getElementById('groupIdField') as HTMLInputElement;
    const groupNameField = document.getElementById('groupNameField') as HTMLInputElement;
    const lineIdField = document.getElementById('lineIdField') as HTMLInputElement;
    const lineDescriptionField = document.getElementById('lineDescriptionField') as HTMLInputElement;
    const partIdField = document.getElementById('partIdField') as HTMLInputElement;
    const partNumberField = document.getElementById('partNumberField') as HTMLInputElement;
    const partDescriptionField = document.getElementById('partDescriptionField') as HTMLInputElement;

    if (saveButton && !saveButton.disabled) {
      saveButton.disabled = true;
    }

    if (unitNameField && unitNameField.value) {
      unitNameField.value = '';
    }

    if (groupIdField && groupIdField.value) {
      groupIdField.value = '';
      groupIdField.focus();
    }

    if (groupNameField && groupNameField.value) {
      groupNameField.value = '';
    }

    if (lineIdField && lineIdField.value) {
      lineIdField.value = '';
    }

    if (lineDescriptionField && lineDescriptionField.value) {
      lineDescriptionField.value = '';
    }

    if (partIdField && partIdField.value) {
      partIdField.value = '';
    }

    if (partNumberField && partNumberField.value) {
      partNumberField.value = '';
    }

    if (partDescriptionField && partDescriptionField.value) {
      partDescriptionField.value = '';
    }

    const unitIdField = document.getElementById('unitIdField') as HTMLInputElement;
    if (unitIdField) {
      unitIdField.focus();
    }
  }

  handleDoubleClick(event: Event, globalParameter: GlobalParameter): void {
    // Business logic for handling double-click event on Unit ID field
    const unitIdField = document.getElementById('unitIdField') as HTMLInputElement;
    if (globalParameter.value === 0) {
      this.formInitializationService.showLov('UNIT_LOV', unitIdField);
    } else if (globalParameter.value === 1) {
      this.formInitializationService.showLov('EDIT_UNIT_LOV', unitIdField);
    }

    const groupIdField = document.getElementById('groupIdField') as HTMLInputElement;
    if (groupIdField) {
      groupIdField.focus();
    }
  }

  handleValidation(event: Event, globalParameter: GlobalParameter): void {
    // Business logic for handling validation event on Unit ID field
    const unitIdField = document.getElementById('unitIdField') as HTMLInputElement;
    const unitNameField = document.getElementById('unitNameField') as HTMLInputElement;

    if (!unitIdField.value || !unitNameField.value) {
      alert('Unit ID and Unit Name cannot be empty.');
      unitIdField.focus();
      return;
    }

    if (globalParameter.value === 0) {
      this.formInitializationService.validateUnitInMesUnitMaster(unitIdField.value, unitNameField.value)
        .then(isValid => {
          if (!isValid) {
            alert('Invalid Unit ID or Unit Name.');
            unitIdField.focus();
          }
        });
    } else if (globalParameter.value === 1) {
      this.formInitializationService.validateUnitInBothTables(unitIdField.value, unitNameField.value)
        .then(isValid => {
          if (!isValid) {
            alert('Invalid Unit ID or Unit Name.');
            unitIdField.focus();
          }
        });
    }
  }
}
