import { Component, OnInit, Input } from '@angular/core';
import {VINYLS} from "../mock-vinyl";
import {Vinyl} from "../vinyl";

@Component({
  selector: 'app-vinyl-details',
  templateUrl: './vinyl-details.component.html',
  styleUrls: ['./vinyl-details.component.scss']
})
export class VinylDetailsComponent implements OnInit {

  @Input() input_title = '';

  // infos : object = {};

  title? : string;
  size? : number;
  artist? : string;

  constructor() { }

  ngOnInit(): void { }

  showDetails() : void
  {
    for (let v of VINYLS){
      if(v.title == this.input_title){
        this.title = v.title;
        this.size = v.size;
        this.artist = v.artist;
      }
    }
  }

}
