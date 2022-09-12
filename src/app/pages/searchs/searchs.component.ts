import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchesService } from 'src/app/services/seachs.service';

@Component({
  selector: 'app-searchs',
  templateUrl: './searchs.component.html',
  styleUrls: ['./searchs.component.scss'],
})
export class SearchsComponent implements OnInit {
  searches: any[] = []
  filter = ""
  filterSelect = ""
  currentPage = 1
  totalItems?: number
  maxSize = 9
  autoHide = true
  responsive = true
  itemSearched = false

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
      const filter = { key: '', value: '' }
      if(this.itemSearched && this.filter.length && this.filterSelect) {
        filter.key = this.filterSelect
        filter.value = this.filter
      }
      this.seachsService.getSearchs($event, filter)
        .subscribe(
          (searches: any) => {
            this.searches = searches.data
            this.totalItems = searches.total
            this.currentPage = searches.page
            document.querySelector('#searchContainer')!.scrollIntoView()
          },
          (err) => {
            console.log(err);
          }
        )
    }
  }

  searchItem(filter: string, filterSelect: string) {
    console.log(filter, filterSelect)
    this.seachsService.getSearchs(1, { key: filterSelect, value: filter })  
      .subscribe(
        (searches: any) => {
          console.log(searches)
          this.searches = searches.data
          this.totalItems = searches.total
          this.currentPage = searches.page
          this.itemSearched = true
          document.querySelector('#searchContainer')!.scrollIntoView()
        },
        (err) => {
          console.log(err);
        }
      )
  }

}
