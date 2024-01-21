import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toturials-list',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './toturials-list.component.html',
  styleUrl: './toturials-list.component.scss'
})
export class ToturialsListComponent implements OnInit {

  tutorials: any;
  currentTutorial: any = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll().subscribe(data => {
      this.tutorials = data;
      console.log(data);
    }, error => {
      console.log(error);
    })
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: any, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe(response => {
      console.log(response);
      this.retrieveTutorials();
    }, error => {
      console.log(error);
    });
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title).subscribe(data => {
      this.tutorials = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}
