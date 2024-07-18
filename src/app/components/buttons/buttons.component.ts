import { Component } from '@angular/core';
import { ButtonsService } from 'src/app/services/buttons.service';
import { FormInitializationService } from 'src/app/services/form-initialization.service';
import { PartService } from 'src/app/services/part.service';
import { FormValidationService } from 'src/app/services/form-validation.service';
import { ExitConfirmationDialogComponent } from 'src/app/components/exit-confirmation-dialog/exit-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {

  constructor(
    private buttonsService: ButtonsService,
    private formInitializationService: FormInitializationService,
    private partService: PartService,
    private formValidationService: FormValidationService,
    private dialog: MatDialog
  ) {}

  saveData(): void {
    if (this.formValidationService.validateForm()) {
      this.partService.checkPartExists().subscribe(exists => {
        if (exists) {
          if (confirm('Part already exists. Do you want to update it?')) {
            this.partService.updatePart().subscribe(() => {
              alert('Part updated successfully');
              this.formInitializationService.resetForm();
            });
          }
        } else {
          this.partService.savePart().subscribe(() => {
            alert('Part saved successfully');
            this.formInitializationService.resetForm();
          });
        }
      });
    } else {
      alert('Please fill all required fields');
    }
  }

  clearData(): void {
    this.formInitializationService.resetForm();
    this.formInitializationService.initializeForm();
  }

  editData(): void {
    this.formInitializationService.resetForm();
    this.formInitializationService.initializeForm();
  }

  exitForm(): void {
    const dialogRef = this.dialog.open(ExitConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Logic to exit the form
      }
    });
  }
}
