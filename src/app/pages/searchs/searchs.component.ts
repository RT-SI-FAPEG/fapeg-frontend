import { Component, OnInit } from '@angular/core';
import { SearchesService } from 'src/app/services/seachs.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit {

  searches: any[] = []

  constructor(
    private seachsService: SearchesService
  ) { }

  ngOnInit(): void {
    this.seachsService.getSearchs()
      .subscribe(
        (searches: any) => {
          console.log(searches)
          this.searches = searches
        },
        (err) => {
          console.log(err)
        }
      )
  }

}
