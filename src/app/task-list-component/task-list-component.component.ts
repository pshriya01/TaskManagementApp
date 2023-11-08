import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { Task } from 'src/interfaces/Task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent implements OnInit {
  tasks: Task[]=[]
  constructor (private taskService : TaskServiceService, private router: Router) {}

  ngOnInit(): void {
    this.tasks= this.taskService.getTask()
  }

  DeleteTask(id:number): void {
    console.log('delete')
    this.taskService.deleteTask(id)
    this.tasks=this.taskService.getTask()
  }

  ViewTask(id:number): void {
    console.log(id)
    this.router.navigate(['/task', id]);
  }
}
