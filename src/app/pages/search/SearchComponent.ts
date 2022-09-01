import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search: any;

  constructor(private router: Router) {
    this.search = this.router.getCurrentNavigation()!.extras.state;
  }

  ngOnInit(): void {
    console.log(this.search);
  }
}
