import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({providedIn: 'root'})
export class GifsService {

  public gifsList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private api_key:string = 'eMe22gNmcJqkcifYEkG3COaUYp7O4Kr3';
  private urlApi:string = 'https://api.giphy.com/v1/gifs';


  constructor( private http: HttpClient ) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  searchTag( tag:string ): void{
    if( tag.length ===0 ) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('limit', '10')
    .set('q', tag);

    this.http.get<SearchResponse>(`${ this.urlApi }/search`, { params})
    .subscribe( resp => {

      this.gifsList = resp.data;

    });


  }

  private organizeHistory(tag: string){
    tag = tag.toLocaleLowerCase();

    if( this._tagsHistory.includes(tag) ){
      this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);
  }

}
