import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  constructor() { }

  length: number = 20000;
  pageSize: number;
  pageSizeOptions = [15,30,50,100];

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  ngOnInit() {
  }

  onPageClicked(pageEvent: PageEvent){
    this.page.emit(pageEvent);
  }

}
