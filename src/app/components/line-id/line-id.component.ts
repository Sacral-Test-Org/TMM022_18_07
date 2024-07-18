import { Component } from '@angular/core';
import { LineIdService } from '../../services/line-id.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-line-id',
  templateUrl: './line-id.component.html',
  styleUrls: ['./line-id.component.css']
})
export class LineIdComponent {
  lineIdForm: FormGroup;
  globalParameter: number = 0; // This should be set based on your application's logic

  constructor(
    private lineIdService: LineIdService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.lineIdForm = this.fb.group({
      lineId: ['', Validators.required],
      lineDesc: ['', Validators.required],
      unitId: ['', Validators.required],
      groupId: ['', Validators.required]
    });
  }

  onLineIdDoubleClick(): void {
    if (this.globalParameter === 0) {
      this.lineIdService.getLineLov().subscribe(
        (data) => {
          // Logic to display LINE_LOV
          console.log('LINE_LOV:', data);
        },
        (error) => {
          console.error('Error fetching LINE_LOV:', error);
        }
      );
    } else if (this.globalParameter === 1) {
      this.lineIdService.getEditLineLov().subscribe(
        (data) => {
          // Logic to display EDIT_LINE_LOV
          console.log('EDIT_LINE_LOV:', data);
        },
        (error) => {
          console.error('Error fetching EDIT_LINE_LOV:', error);
        }
      );
    }
    // Navigate to Part Number field
    const partNumberField = document.getElementById('partNumberField') as HTMLInputElement;
    if (partNumberField) {
      partNumberField.focus();
    }
  }

  onLineIdClick(): void {
    // Disable Save button
    const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    if (saveButton) {
      saveButton.disabled = true;
    }

    // Clear fields if not null
    ['lineId', 'lineDesc', 'partId', 'partNumber', 'partDesc'].forEach(field => {
      if (this.lineIdForm.get(field)?.value) {
        this.lineIdForm.get(field)?.setValue('');
      }
    });

    // Navigate back to Line ID field
    const lineIdField = document.getElementById('lineIdField') as HTMLInputElement;
    if (lineIdField) {
      lineIdField.focus();
    }
  }

  onNextItem(): void {
    const requiredFields = ['unitId', 'unitName', 'groupId', 'groupName', 'lineId', 'lineDesc'];
    for (const field of requiredFields) {
      if (!this.lineIdForm.get(field)?.value) {
        console.error(`Validation failed: ${field} is required.`);
        const fieldElement = document.getElementById(field) as HTMLInputElement;
        if (fieldElement) {
          fieldElement.focus();
        }
        return;
      }
    }
    // Navigate to Part Number field
    const partNumberField = document.getElementById('partNumberField') as HTMLInputElement;
    if (partNumberField) {
      partNumberField.focus();
    }
  }

  validateLineId(): void {
    const lineId = this.lineIdForm.get('lineId')?.value;
    const lineDesc = this.lineIdForm.get('lineDesc')?.value;
    const unitId = this.lineIdForm.get('unitId')?.value;
    const groupId = this.lineIdForm.get('groupId')?.value;

    if (this.globalParameter === 0) {
      this.lineIdService.validateLineIdInLineMaster(unitId, groupId, lineId, lineDesc).subscribe(
        (isValid) => {
          if (!isValid) {
            console.error('Validation failed: Line ID or Line Description is incorrect.');
          } else {
            console.log('Validation successful.');
          }
        },
        (error) => {
          console.error('Error validating Line ID:', error);
        }
      );
    } else if (this.globalParameter === 1) {
      this.lineIdService.validateLineIdInBothTables(unitId, groupId, lineId, lineDesc).subscribe(
        (isValid) => {
          if (!isValid) {
            console.error('Validation failed: Line ID or Line Description is incorrect.');
          } else {
            console.log('Validation successful.');
          }
        },
        (error) => {
          console.error('Error validating Line ID:', error);
        }
      );
    }
  }
}
