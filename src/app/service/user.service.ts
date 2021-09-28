import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserService {
  endpoint = environment.URL;

  constructor(private HttpClient : HttpClient) { }

  getUsers(): Observable<any>{
    return this.HttpClient.get(this.endpoint).pipe(map((response: any) => response));
  }
}

