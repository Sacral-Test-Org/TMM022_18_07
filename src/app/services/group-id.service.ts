import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root'
})
export class GroupIDService {

  private baseUrl = 'http://localhost:8080/api/groups'; // Base URL for the GroupController API

  constructor(private http: HttpClient, private logger: NGXLogger) { }

  /**
   * Fetch the 'GROUP_LOV' list of values from the API.
   * @returns Observable<any>
   */
  fetchGroupLOV(): Observable<any> {
    this.logger.info('Fetching GROUP_LOV data');
    return this.http.get<any>(`${this.baseUrl}/group-lov`);
  }

  /**
   * Fetch the 'EDIT_GROUP_LOV' list of values from the API.
   * @returns Observable<any>
   */
  fetchEditGroupLOV(): Observable<any> {
    this.logger.info('Fetching EDIT_GROUP_LOV data');
    return this.http.get<any>(`${this.baseUrl}/edit-group-lov`);
  }

  /**
   * Validate Group ID and Group Name against the database using the API.
   * @param groupId - The Group ID to validate
   * @param groupName - The Group Name to validate
   * @returns Observable<any>
   */
  validateGroupID(groupId: string, groupName: string): Observable<any> {
    this.logger.info(`Validating Group ID: ${groupId} and Group Name: ${groupName}`);
    return this.http.post<any>(`${this.baseUrl}/validate`, { groupId, groupName });
  }
}
