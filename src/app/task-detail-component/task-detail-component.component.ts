import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/interfaces/Task';
import { TaskServiceService } from '../task-service.service';
// import { TaskService, Task } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail-component.component.html',
  styleUrls: ['./task-detail-component.component.css']
})
export class TaskDetailComponentComponent implements OnInit {
  selectedTask: Task={id:0, title: "", description: "", completed:false};

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const taskId = +params['id'];
      console.log(taskId)
      const task = this.taskService.getIndividualTask(taskId);
      if (task!==undefined){
        this.selectedTask=task
      }else{
        console.log("Task not found")
      }
    });
  }

  markCompleted(): void {
    this.taskService.toggleTaskCompletion(this.selectedTask.id)
  }
}
