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
    let cc = window as any;
    cc.cookieconsent.initialise({
      palette: {
        popup: {
          background: "#fff"
        },
        button: {
          background: "#333",
          text: "#fff"
        }
      },
      theme: "classic",
      content: {
        message: "Esse site faz uso de cookies para melhorar ainda mais sua experiência | ",
        dismiss: "Entendi",
        link: "Política de Privacidade"
      }
    });

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
