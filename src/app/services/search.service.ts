import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { RadiusAgentReturnData } from '../models/radiusAgentReturnData'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getDataFromApi(githubUrl:string): Observable<RadiusAgentReturnData> {
    if(!githubUrl.startsWith("https://"))
      githubUrl = "https://"+githubUrl;
    const url = `https://agile-lowlands-93991.herokuapp.com/search?githubUrl=${githubUrl}`;
    // const url=`http://localhost:8080/search?githubUrl=${githubUrl}`;
    return this.http.get<RadiusAgentReturnData>(url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Serve error');
  }
}
