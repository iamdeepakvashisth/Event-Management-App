import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.css']
})
export class DisplayEventsComponent implements OnInit {
  title = 'Events';
  event = [];

  eventName: string;
  description: string;
  location: string;
  date: string;
  fileName = 'ExcelSheet.xlsx';
  constructor(private eService: EventsService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    this.eService.getEvent()
      .subscribe(response => this.event = response);
  }


  exportexcel(): void {

    let element = document.getElementById('excel-table');
    const work_sheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const work_book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(work_book, work_sheet, 'Sheet1');

    XLSX.writeFile(work_book, this.fileName);

  }

  refreshEventList() {
    this.eService.getEvent().subscribe((res) => {
      console.log("updated list")
    });
  }

  deleteEvent(id:number) {
    console.log(id);
    this.eService.deleteEvent(id).subscribe(() => {
        console.log("Event deleted");
        this.getEvent();
        this.refreshEventList();
      })
  }

}