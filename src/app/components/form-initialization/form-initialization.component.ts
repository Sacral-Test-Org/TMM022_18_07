import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-initialization',
  templateUrl: './form-initialization.component.html',
  styleUrls: ['./form-initialization.component.css']
})
export class FormInitializationComponent implements OnInit {
  sysdate: string;
  screenname: string;
  mode: string;
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  partStatus: string;
  errorMessage: string;
  globalParameter: number = 0; // Example global parameter

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.sysdate = new Date().toISOString().split('T')[0]; // Current date without time
    this.screenname = 'Form Initialization';
    this.mode = this.globalParameter === 0 ? 'Create' : 'Edit';
    this.partStatus = '';
    this.errorMessage = '';
    this.disableSaveButton();
    this.enableFields();
    this.focusUnitIdField();
  }

  disableSaveButton() {
    // Logic to disable the save button
  }

  enableFields() {
    // Logic to enable the required fields
  }

  focusUnitIdField() {
    // Logic to set focus to the UNIT_ID field
  }

  onPartDescClick() {
    if (this.isSaveButtonEnabled()) {
      this.disableSaveButton();
    }
    if (this.partDesc) {
      this.partDesc = '';
    }
    this.focusPartDescField();
  }

  onPartDescDoubleClick() {
    this.onPartDescClick();
  }

  focusPartDescField() {
    // Logic to set focus to the PART_DESC field
  }

  isSaveButtonEnabled(): boolean {
    // Logic to check if the save button is enabled
    return false;
  }

  onLineIdClick() {
    if (this.isSaveButtonEnabled()) {
      this.disableSaveButton();
    }
    this.clearFields(['lineId', 'lineDesc', 'partId', 'partNo', 'partDesc']);
    this.focusLineIdField();
  }

  onLineIdDoubleClick() {
    if (this.globalParameter === 0) {
      this.showLineLov();
    } else {
      this.showEditLineLov();
    }
  }

  showLineLov() {
    // Logic to display LINE_LOV
  }

  showEditLineLov() {
    // Logic to display EDIT_LINE_LOV
  }

  focusLineIdField() {
    // Logic to set focus to the LINE_ID field
  }

  clearFields(fields: string[]) {
    fields.forEach(field => {
      this[field] = '';
    });
  }

  onSave() {
    // Logic to save the form data
  }

  onClear() {
    this.clearFields(['unitId', 'unitName', 'groupId', 'groupName', 'lineId', 'lineDesc', 'partId', 'partNo', 'partDesc', 'partStatus']);
    this.disableSaveButton();
  }

  onEdit() {
    // Logic to enable editing of existing data
  }

  onExit() {
    // Logic to close the form or navigate away
  }

  validateFields() {
    if (!this.unitId || !this.unitName) {
      this.errorMessage = 'Unit ID and Unit Name should not be null';
      this.focusUnitIdField();
      return false;
    }
    if (!this.groupId || !this.groupName) {
      this.errorMessage = 'Group ID and Group Name should not be null';
      this.focusGroupIdField();
      return false;
    }
    if (!this.lineId || !this.lineDesc) {
      this.errorMessage = 'Line ID and Line Name should not be null';
      this.focusLineIdField();
      return false;
    }
    if (this.globalParameter === 0 && !this.partNo) {
      this.errorMessage = 'Part No and Part Description should not be null';
      this.focusPartNoField();
      return false;
    }
    if (this.globalParameter === 1 && !this.partId) {
      this.errorMessage = 'Kindly Choose data from LOV before changing Description';
      this.focusPartNoField();
      return false;
    }
    return true;
  }

  focusGroupIdField() {
    // Logic to set focus to the GROUP_ID field
  }

  focusPartNoField() {
    // Logic to set focus to the PARTNO field
  }
}
