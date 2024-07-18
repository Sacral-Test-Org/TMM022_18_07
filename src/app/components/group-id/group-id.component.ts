import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupIDService } from 'src/app/services/group-id.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-group-id',
  templateUrl: './group-id.component.html',
  styleUrls: ['./group-id.component.css']
})
export class GroupIDComponent {
  groupID: string;
  groupName: string;
  unitID: string;
  unitName: string;
  lineID: string;
  lineDescription: string;
  partID: string;
  partNumber: string;
  partDescription: string;
  saveButtonEnabled: boolean;

  constructor(
    private groupIDService: GroupIDService,
    private router: Router,
    private logger: NGXLogger
  ) {}

  handleDoubleClick(): void {
    this.logger.debug('Double click detected on Group ID field');
    const globalParam = this.getGlobalParameter();

    if (globalParam === 1) {
      this.groupIDService.fetchEditGroupLOV(this.unitID).subscribe(
        (data) => {
          this.logger.debug('Fetched Edit Group LOV data', data);
          // Handle the fetched data
          this.navigateToLineID();
        },
        (error) => {
          this.logger.error('Error fetching Edit Group LOV data', error);
        }
      );
    } else {
      this.groupIDService.fetchGroupLOV(this.unitID).subscribe(
        (data) => {
          this.logger.debug('Fetched Group LOV data', data);
          // Handle the fetched data
          this.navigateToLineID();
        },
        (error) => {
          this.logger.error('Error fetching Group LOV data', error);
        }
      );
    }
  }

  handleClick(): void {
    this.logger.debug('Click detected on Group ID field');
    this.disableSaveButton();
    this.clearFields();
    this.navigateToGroupID();
  }

  validateGroupID(): void {
    this.logger.debug('Validating Group ID:', this.groupID);
    const globalParam = this.getGlobalParameter();

    if (globalParam === 1) {
      this.groupIDService.validateGroupIDInEditMode(this.unitID, this.groupID, this.groupName).subscribe(
        (isValid) => {
          if (isValid) {
            this.logger.debug('Group ID is valid');
            // Handle valid case
          } else {
            this.logger.warn('Group ID is invalid');
            // Handle invalid case
          }
        },
        (error) => {
          this.logger.error('Error validating Group ID', error);
        }
      );
    } else {
      this.groupIDService.validateGroupIDInViewMode(this.unitID, this.groupID, this.groupName).subscribe(
        (isValid) => {
          if (isValid) {
            this.logger.debug('Group ID is valid');
            // Handle valid case
          } else {
            this.logger.warn('Group ID is invalid');
            // Handle invalid case
          }
        },
        (error) => {
          this.logger.error('Error validating Group ID', error);
        }
      );
    }
  }

  private getGlobalParameter(): number {
    // Mock implementation to get global parameter
    return 1; // or 0, etc.
  }

  private navigateToLineID(): void {
    this.router.navigate(['/line-id']);
  }

  private disableSaveButton(): void {
    this.saveButtonEnabled = false;
    this.logger.debug('Save button disabled');
  }

  private clearFields(): void {
    this.groupID = '';
    this.groupName = '';
    this.lineID = '';
    this.lineDescription = '';
    this.partID = '';
    this.partNumber = '';
    this.partDescription = '';
    this.logger.debug('Fields cleared');
  }

  private navigateToGroupID(): void {
    this.router.navigate(['/group-id']);
  }
}
