import { Component, OnInit } from '@angular/core';
import { SuccessStoriesService } from 'src/app/services/success-stories.service';

@Component({
  selector: 'app-success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit {

  sucessStories: { description: string, title: string }[] = [];

  constructor(
    private successStoriesService: SuccessStoriesService
  ) { }

  ngOnInit(): void {
    this.successStoriesService.getSucessStories().subscribe(
      (response) => {
        this.sucessStories = response
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
