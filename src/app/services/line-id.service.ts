import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class LineIdService {
  private baseUrl = 'http://localhost:8080/api/line'; // Base URL for the Line Controller

  constructor(private http: HttpClient, private logger: NGXLogger) {}

  /**
   * Fetch the list of Line IDs from the controller.
   * @returns {Observable<any>} Observable containing the list of Line IDs.
   */
  getLineIdList(): Observable<any> {
    this.logger.info('Fetching list of Line IDs');
    return this.http.get(`${this.baseUrl}/list`).pipe(
      catchError(error => {
        this.logger.error('Error fetching Line IDs', error);
        throw error;
      })
    );
  }

  /**
   * Validate Line ID and Line Description against the database.
   * @param {string} lineId - The Line ID to validate.
   * @param {string} lineDesc - The Line Description to validate.
   * @returns {Observable<any>} Observable containing the validation result.
   */
  validateLineId(lineId: string, lineDesc: string): Observable<any> {
    this.logger.info(`Validating Line ID: ${lineId} with Description: ${lineDesc}`);
    return this.http.post(`${this.baseUrl}/validate`, { lineId, lineDesc }).pipe(
      catchError(error => {
        this.logger.error('Error validating Line ID', error);
        throw error;
      })
    );
  }
}
