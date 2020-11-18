import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketSaleService } from '../services/ticket-sale.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ticket-sale',
  templateUrl: './ticket-sale.component.html',
  styleUrls: ['./ticket-sale.component.css']
})
export class TicketSaleComponent implements OnInit {
  title = 'Ticket Sale';
  ticketSale = [];
  totalQty: number;
  totalSale: number;
  id: number;
  eventName: string;
  customerEmail: string;
  noOfTickets: number;

  fileName = 'ExcelSheet.xlsx';
  constructor(private tSS: TicketSaleService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllTicketSale();
  }

  getAllTicketSale() {
    this.tSS.getAllTicketSale()
      .subscribe(response => {
        this.ticketSale = response
        console.log(this.ticketSale)
        this.sumofAllTickets()
      });
    // console.log(this.ticketSale)
  }

  sumofAllTickets(): any {
    this.totalQty = 0
    for (var i = 0; i < this.ticketSale.length; i++) {
      //console.log(this.totalQty, this.ticketSale[i], this.ticketSale[i].noOfTickets)
      this.totalQty = this.totalQty + this.ticketSale[i].noOfTickets;
      //console.log("sum tot q", this.totalQty, this.ticketSale[i].noOfTickets)
    }
  }

  // sumOfSale(): any {
  // YET TO BE IMPLEMENTED
  // }

  exportexcel(): void {
    let element = document.getElementById('excel-table');
    const work_sheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const work_book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(work_book, work_sheet, 'Sheet1');
    XLSX.writeFile(work_book, this.fileName);
  }
}

