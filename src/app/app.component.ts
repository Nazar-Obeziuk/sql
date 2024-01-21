import { Component, ElementRef, HostBinding, OnInit, ViewChild, Injectable, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITask, ITaskResponse } from './interfaces/task/task.interface';
import { switchMap, tap } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChartModule } from 'primeng/chart';
import {
  injectMutation,
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, FormsModule, ReactiveFormsModule, ButtonModule, InputTextModule, ChartModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular'


  ngOnInit(): void {
    
  }

}


// public allTasks: ITaskResponse[] = [];
// public taskName!: string;
// public taskForm!: FormGroup;
// private editStatus = false;
// private currentTaskId!: string;

// constructor(
//   private taskService: TaskService,
//   private fb: FormBuilder,
// ) {}

// ngOnInit(): void {
//   this.getAllTasks();
//   this.initTaskForm();
// }


// initTaskForm(): void {
//   this.taskForm = this.fb.group({
//     name: [null, Validators.required]
//   })
// }

// getAllTasks(): void {
//   // this.taskService.getAllTasks().subscribe(data => {
//   //   this.allTasks = data as ITaskResponse[];
//   // })
//   this.taskService.getAllTasks().pipe(
//     tap((data) => {
//       this.allTasks = data;
//     })
//   ).subscribe();
// }

// addTask(): void {
//   if (this.editStatus) {
//     // this.taskService.updateTask(this.taskForm.value, this.currentTaskId).subscribe(() => {
//     //   this.taskForm.reset();
//     //   this.editStatus = false;
//     // });
//     this.taskService.updateTask(this.taskForm.value, this.currentTaskId).pipe(
//       tap(() => {
//         this.taskForm.reset();
//         this.editStatus = false;
//       })
//     ).subscribe();
//   } else {
//     // this.taskService.createTask(this.taskForm.value).subscribe(() => {
//     //   this.taskForm.reset();
//     // })
//     this.taskService.createTask(this.taskForm.value).pipe(
//       tap(() => this.taskForm.reset())
//     ).subscribe();
//   }
// }

// editTask(task: ITaskResponse): void {
//   this.taskForm.patchValue({
//    name: task.name
//   });
//   this.editStatus = true;
//   this.currentTaskId = task.id as string;
// }

// deleteTask(task: ITaskResponse): void {
//   // this.taskService.deleteTask(task.id as string).subscribe(() => {
//   //   this.getAllTasks();
//   // })
//   this.taskService.deleteTask(task.id as string).pipe(
//     switchMap(() => this.taskService.getAllTasks()),
//     tap(updatedTasks => {
//       this.allTasks = updatedTasks;
//     })
//   ).subscribe()
// }