import { Injectable } from '@angular/core';
import { Task } from 'src/interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  constructor() { }

  tasks: Task[] = [{id:1,title:"Learn Routing",description:"Learn Routing in Angular using ChatGpt",completed:false},
];

  addTask(newTask:Task):void {
    this.tasks.push(newTask)
  }

  getTask():Task[] {
    return this.tasks
  }

  deleteTask(id:number) {
     let afterDelete= this.tasks.filter((task)=>task.id!==id)
     this.tasks=afterDelete
  }

  getIndividualTask(taskId: number): Task | undefined {
    return this.tasks.find(task => task.id === taskId) ;
  }

  toggleTaskCompletion(taskId: number): void {
     const updatedTasks=this.tasks.map((task)=>task.id===taskId?{...task,completed:!task.completed}:task)
     this.tasks=updatedTasks
  }
}
