import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchesService } from 'src/app/services/seachs.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss']
})
export class SearchsComponent implements OnInit {

  searches: any[] = []

  constructor(
    private seachsService: SearchesService,
    private router: Router
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

  showSearchDetails(search: any) {
    this.router.navigateByUrl('/seach', {
      state: search
    }) 
  }

}
