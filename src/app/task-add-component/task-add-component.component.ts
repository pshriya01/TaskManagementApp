import { Component } from '@angular/core';
import { Task } from 'src/interfaces/Task';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-add-component',
  templateUrl: './task-add-component.component.html',
  styleUrls: ['./task-add-component.component.css']
})
export class TaskAddComponentComponent {
   newTask: Task = {id:this.taskService.tasks.length+1, title:"" , description:"", completed: false}

   constructor (private taskService: TaskServiceService) {}

   addTask ():void {
    console.log(this.newTask)
      this.taskService.addTask(this.newTask)
   }
}
