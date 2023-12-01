import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[]=[];

  constructor(private countriesSer: CountriesService ){}

  searchByCountry( term: string ){
    this.countriesSer.searchCountry(term).subscribe( country => this.countries = country );
  }



}
