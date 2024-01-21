import { Component, OnInit } from '@angular/core';
import { TutorialService } from '../../services/tutorial.service';
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-tutorial',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tutorial.component.html',
  styleUrl: './add-tutorial.component.scss'
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };

  public submitted = false;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit(): void {
    
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      describe: this.tutorial.description
    };

    this.tutorialService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    }, error => {
      console.log(error);
    })
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
