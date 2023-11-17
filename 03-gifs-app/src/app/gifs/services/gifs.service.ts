import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private _tagsHistory: string[] = [];
  private API_KEY:string = 'eMe22gNmcJqkcifYEkG3COaUYp7O4Kr3';
  private urlApi:string = 'https://api.giphy.com/v1/gifs/search?api_key=eMe22gNmcJqkcifYEkG3COaUYp7O4Kr3&q=sims&limit=10';

  constructor( private http: HttpClient ) { }

  get tagsHistory(){
    return [...this._tagsHistory];
  }

  searchTag( tag:string ): void{
    if( tag.length ===0 ) return;
    this.organizeHistory(tag);
    this.http.get(this.urlApi).subscribe( resp => {
      console.log(resp);
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
