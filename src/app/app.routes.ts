import { Routes } from '@angular/router';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { ToturialsListComponent } from './components/tutorials-list/toturials-list.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
    { path: 'tutorials', component: ToturialsListComponent },
    { path: 'tutorials/:id', component: TutorialDetailsComponent },
    { path: 'add', component: AddTutorialComponent }
];
