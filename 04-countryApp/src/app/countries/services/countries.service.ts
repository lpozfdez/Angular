import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }


  searchCapital( term:string ):Observable<Country[]> {
    return this.http.get<Country[]> (`${this.apiUrl}/capital/${ term }`).pipe(
      catchError( () => of([]) )
    );

  }

}
