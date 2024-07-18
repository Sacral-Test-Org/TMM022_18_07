import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Part } from '../models/part.model';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  private apiUrl = `${environment.apiUrl}/parts`;

  constructor(private http: HttpClient) { }

  validateAndUpdatePartDescription(partDescription: string): Observable<any> {
    const url = `${this.apiUrl}/validateAndUpdatePartDescription`;
    return this.http.post(url, { partDescription });
  }

  validateNextItem(currentItem: string): Observable<any> {
    const url = `${this.apiUrl}/validateNextItem`;
    return this.http.post(url, { currentItem });
  }

  fetchPartNumbers(globalParameter: string, unitId: string, groupId: string, lineId: string): Observable<string[]> {
    const url = `${this.apiUrl}/fetchPartNumbers`;
    return this.http.post<string[]>(url, { globalParameter, unitId, groupId, lineId });
  }

  validatePartNumber(partNumber: string, globalParameter: string, unitId: string, groupId: string, lineId: string): Observable<any> {
    const url = `${this.apiUrl}/validatePartNumber`;
    return this.http.post(url, { partNumber, globalParameter, unitId, groupId, lineId });
  }

  checkPartExists(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string): Observable<boolean> {
    const url = `${this.apiUrl}/checkPartExists`;
    return this.http.post<boolean>(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO });
  }

  savePart(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string, PART_DESC: string, PART_STATUS: string): Observable<any> {
    const url = `${this.apiUrl}/savePart`;
    return this.http.post(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO, PART_DESC, PART_STATUS });
  }

  updatePart(UNIT_ID: string, GROUP_ID: string, LINE_ID: string, PARTNO: string, PART_DESC: string, PART_STATUS: string, PART_ID: string): Observable<any> {
    const url = `${this.apiUrl}/updatePart`;
    return this.http.put(url, { UNIT_ID, GROUP_ID, LINE_ID, PARTNO, PART_DESC, PART_STATUS, PART_ID });
  }
}
