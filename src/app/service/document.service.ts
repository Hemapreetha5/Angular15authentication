import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'http://localhost:3000/clients'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  saveDocuments(documents: any[]): Observable<any> {
    return this.http.post(this.apiUrl, { documents });
  }
}
