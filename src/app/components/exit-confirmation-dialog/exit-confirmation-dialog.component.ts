import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-confirmation-dialog',
  templateUrl: './exit-confirmation-dialog.component.html',
  styleUrls: ['./exit-confirmation-dialog.component.css']
})
export class ExitConfirmationDialogComponent {

  constructor(public dialogRef: MatDialogRef<ExitConfirmationDialogComponent>) {}

  onYesClick(): void {
    // Logic to close the application without saving any unsaved changes
    console.log('Application will be closed without saving changes.');
    this.dialogRef.close();
    window.close(); // This will close the browser tab or window
  }

  onNoClick(): void {
    // Logic to close the confirmation dialog and keep the application open
    this.dialogRef.close();
  }
}
