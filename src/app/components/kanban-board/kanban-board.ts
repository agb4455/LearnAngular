import { Component, HostListener } from '@angular/core';
import { Task, TastState} from '../../model/Task';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatOption, MatSelectModule } from "@angular/material/select";
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { CdkAccordionItem } from "@angular/cdk/accordion";

@Component({
  selector: 'app-kanban-board',
  imports: [
    MatCardModule,
    CommonModule,
    DragDropModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatOption,
    MatSelectModule,
    MatButtonModule,
    MatIcon,
    CdkAccordionItem
],
  templateUrl: './kanban-board.html',
  styleUrl: './kanban-board.scss'
})
export class KanbanBoard {
  TaskList : Task [] = [];

  isEntering: boolean = false;

  states = Object.values(TastState);
  listIds = Object.values(TastState).map(s => s.toString());

  FormData = new FormGroup({
    name : new FormControl <String>('',[Validators.required]),
    description : new FormControl <String>('',[Validators.required]),
    state: new FormControl <TastState | null>(null,[Validators.required])
  })

  // Objeto para que CDK tenga referencias estables
  tasksByState: Record<TastState, Task[]> = {
    [TastState.TODO]: [],
    [TastState.IN_PROGRESS]: [],
    [TastState.DONE]: []
  };
  

  constructor() {
    const saved = localStorage.getItem('kanban-tasks');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Reconstruir objetos Task desde JSON
      this.TaskList = parsed.map((t: any) => new Task(t.id, t.title, t.description, t.state));
    }

    this.updateTasksByState();
  }

  updateTasksByState() {
    this.states.forEach(state => {
      const tasks = this.TaskList.filter(t => t.state === state);
      this.tasksByState[state].splice(0, this.tasksByState[state].length, ...tasks);
    });
  }

  saveTasks() {
    localStorage.setItem('kanban-tasks', JSON.stringify(this.TaskList));
  }

  drop(event: CdkDragDrop<Task[]>, targetState: TastState) {
    const task = event.previousContainer.data[event.previousIndex];
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      task.state = targetState;
      this.updateTasksByState(); // ahora seguro
    }

    this.saveTasks();
  }

  

  @HostListener('window:beforeunload')
  ngOnDestroy() {
    this.saveTasks();
  }

  onSubmit(){
    if(!this.FormData.invalid){
      this.TaskList.push(new Task(
        this.TaskList.length + 1 as number,
        this.FormData.value.name as string,
        this.FormData.value.description as string,
        this.FormData.value.state as TastState
      ));
      this.updateTasksByState();
      this.saveTasks();
      this.isEntering = false;
      this.FormData.reset();
    }else{
      console.log("no es viable la insercion" + this.FormData)
    }
  }

  deletedElementById(id:number){
    const index = this.TaskList.findIndex((task: any) => task.id === id);

    if (index !== -1) {
        this.TaskList.splice(index, 1);
    }

    this.updateTasksByState();
    this.saveTasks();
  }
}
