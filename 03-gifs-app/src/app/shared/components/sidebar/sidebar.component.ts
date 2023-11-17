import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor( private gifsService: GifsService){}

  //private allTags: string[]=[];

  get tags(): string[] {
    const allTags = this.gifsService.tagsHistory;
    return allTags;
  }

}
