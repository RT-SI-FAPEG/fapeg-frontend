import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from 'src/app/services/indicators.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  indicators: any[] = []

  constructor(
    private indicatorsService: IndicatorsService
  ) { }

  ngOnInit(): void {
    this.indicatorsService.getIndicators()
      .subscribe(
        (indicators) => {
          this.indicators = indicators
        },
        (err) => {
          console.log(err)
        }
      )
  }

}
