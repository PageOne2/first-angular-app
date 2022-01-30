import { Component, OnInit } from '@angular/core';

import { ApiServicesService } from 'src/app/services/api-services.service';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  CSVs: any[] = []

  constructor(private apiService: ApiServicesService) { }

  ngOnInit(): void {
    this.apiService.getData().subscribe(res => {
      this.CSVs = res.data.csv
    })
  }

}
