import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-unit-id',
  templateUrl: './unit-id.component.html',
  styleUrls: ['./unit-id.component.css']
})
export class UnitIdComponent {
  unitForm: FormGroup;
  globalParameter: number = 0; // This should be set based on your application's logic

  constructor(private fb: FormBuilder) {
    this.unitForm = this.fb.group({
      unitId: ['', Validators.required],
      unitName: ['', Validators.required],
      groupId: [''],
      groupName: [''],
      lineId: [''],
      lineDescription: [''],
      partId: [''],
      partNumber: [''],
      partDescription: ['']
    });
  }

  onUnitIdDoubleClick() {
    if (this.globalParameter === 0) {
      this.showUnitLOV();
    } else if (this.globalParameter === 1) {
      this.showEditUnitLOV();
    }
  }

  onUnitIdClick() {
    this.disableSaveButton();
    this.clearFields();
    this.unitForm.get('unitId')?.focus();
  }

  onNextItem() {
    if (this.unitForm.get('unitId')?.invalid || this.unitForm.get('unitName')?.invalid) {
      alert('Unit ID and Unit Name are required.');
      this.unitForm.get('unitId')?.focus();
    } else {
      this.unitForm.get('groupId')?.focus();
    }
  }

  validateUnitId() {
    if (this.globalParameter === 0) {
      this.checkUnitInMesUnitMaster();
    } else if (this.globalParameter === 1) {
      this.checkUnitInBothTables();
    }
  }

  private showUnitLOV() {
    // Logic to display UNIT_LOV
    console.log('Displaying UNIT_LOV');
    this.unitForm.get('groupId')?.focus();
  }

  private showEditUnitLOV() {
    // Logic to display EDIT_UNIT_LOV
    console.log('Displaying EDIT_UNIT_LOV');
    this.unitForm.get('groupId')?.focus();
  }

  private disableSaveButton() {
    // Logic to disable the Save button
    console.log('Save button disabled');
  }

  private clearFields() {
    this.unitForm.get('unitName')?.setValue('');
    this.unitForm.get('groupId')?.setValue('');
    this.unitForm.get('groupName')?.setValue('');
    this.unitForm.get('lineId')?.setValue('');
    this.unitForm.get('lineDescription')?.setValue('');
    this.unitForm.get('partId')?.setValue('');
    this.unitForm.get('partNumber')?.setValue('');
    this.unitForm.get('partDescription')?.setValue('');
  }

  private checkUnitInMesUnitMaster() {
    // Logic to check if Unit ID and Unit Name exist in MES_UNIT_MASTER
    console.log('Checking MES_UNIT_MASTER');
    // Add your database query logic here
  }

  private checkUnitInBothTables() {
    // Logic to check if Unit ID and Unit Name exist in both MES_UNIT_MASTER and HPM_PART_MASTER
    console.log('Checking MES_UNIT_MASTER and HPM_PART_MASTER');
    // Add your database query logic here
  }
}
