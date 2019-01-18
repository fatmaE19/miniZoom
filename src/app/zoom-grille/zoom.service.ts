import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable()
export class ZoomService {
private allTrancheUrl=environment.apiUrl+"tranches/getAll";
  constructor(private http: HttpClient) { }
public getAllTranche(){
  return this.http.get(this.allTrancheUrl) ;
 
}
}
