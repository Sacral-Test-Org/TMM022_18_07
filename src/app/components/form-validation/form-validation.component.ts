import { Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {

  constructor() { }

  /**
   * Validates a single field.
   * @param fieldName - The name of the field to validate.
   * @param fieldValue - The value of the field to validate.
   * @returns An error message if the field value is null, otherwise an empty string.
   */
  validateField(fieldName: string, fieldValue: any): string {
    if (fieldValue === null || fieldValue === undefined || fieldValue === '') {
      return `${fieldName} cannot be empty.`;
    }
    return '';
  }

  /**
   * Validates all fields in the given object.
   * @param fields - An object containing field names and their values.
   * @returns A list of error messages for fields that are null.
   */
  validateAllFields(fields: { [key: string]: any }): string[] {
    const errorMessages: string[] = [];
    for (const fieldName in fields) {
      if (fields.hasOwnProperty(fieldName)) {
        const errorMessage = this.validateField(fieldName, fields[fieldName]);
        if (errorMessage) {
          errorMessages.push(errorMessage);
        }
      }
    }
    return errorMessages;
  }
}
