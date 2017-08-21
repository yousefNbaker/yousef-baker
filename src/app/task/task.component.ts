import { Component, OnInit } from '@angular/core';
import {Task} from '../Task'
import { TaskService } from "../services/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers:[TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = []
  t:number=0
  
  constructor( private dataSerive: TaskService) { 
    this.tasks = dataSerive.getTasks();
  }

  ngOnInit() {

  }

  removeTask(task: Task) {
    this.tasks = this.tasks.filter(  t => t !== task);
    this.t=this.t-(task.price*task.qty);
  }

  addNewTask(name:string,qty:number,price:number){
  
  this.tasks.push(new Task(name,qty,price));
   return this.t= this.t + ( qty * price);
  }

  handleKeyUp(ev) {
    if (ev.which === 13){
      this.addNewTask(ev.target.value,ev.target.value,ev.target.value);
      ev.target.value = ''
    }
  }
}