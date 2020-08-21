import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.css']
})
export class InvestmentComponent implements OnInit {
  title = 'Angular Example';
  products: any = [];
  funds: any = [];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('../../../assets/demo.json').subscribe(data => {
      console.log('json data>>>>', data);
      this.products = data
      this.funds = this.products.result.funds;
    })
  }

}
