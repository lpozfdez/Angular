import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  public urlBase: string = 'https://restcountries.com/v3.1/region';
  public fields: string ='?fields=cca3,name,borders';
  public _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania];

  constructor(private http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountries( region: Region | string ): Observable<SmallCountry[]> {

    if(!region) return of([]);

    const url: string = `${this.urlBase}/${region}/${this.fields}`;

    return this.http.get<Country[]>(url).pipe(
      map( countries => countries.map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })))
    );

  }


}
