import { Component, OnInit } from '@angular/core';
import {VINYLS} from "../mock-vinyl";
import {Vinyl} from "../vinyl";

@Component({
  selector: 'app-list-vinyls',
  templateUrl: './list-vinyls.component.html',
  styleUrls: ['./list-vinyls.component.scss']
})
export class ListVinylsComponent implements OnInit {

  vinyls : Vinyl[] = [];

  constructor() { }

  ngOnInit(): void {
    this.vinyls = VINYLS;
    this.showList();
  }

  showList() : object
  {
    return this.vinyls;
  }

}
