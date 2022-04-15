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
    let vinyl   = VINYLS.find(v => v.title === this.input_title);
    if(vinyl){
      this.title  = vinyl.title;
      this.size   = vinyl.size;
      this.artist = vinyl.artist;
    }
  }

}
