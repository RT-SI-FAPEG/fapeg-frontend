import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchesService } from 'src/app/services/seachs.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss'],
})
export class SearchsComponent implements OnInit {
  searches: any[] = [];
  currentPage = 1
  totalItems?: number
  maxSize = 9
  autoHide = true
  responsive = true

  constructor(private seachsService: SearchesService, private router: Router) {}

  ngOnInit(): void {
    this.seachsService.getSearchs(this.currentPage).subscribe(
      (searches: any) => {
        console.log(searches)
        this.searches = searches.data;
        this.totalItems = searches.total
        this.currentPage = searches.page
      },
      (err) => {
        console.log(err);
      }
    );
  }

  showSearchDetails(search: any) {
    this.router.navigateByUrl('/search', {
      state: search,
    });
  }

  getPage($event: any)  {
    if($event != this.currentPage) {
      this.seachsService.getSearchs($event)
        .subscribe(
          (searches: any) => {
            this.searches = searches.data
            this.totalItems = searches.total
            this.currentPage = searches.page
            document.querySelector('#listStart')!.scrollIntoView()
          },
          (err) => {
            console.log(err);
          }
        )
    }
  }
}
