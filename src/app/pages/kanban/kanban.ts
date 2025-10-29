import { Component } from '@angular/core';
import { KanbanBoard } from '../../components/kanban-board/kanban-board';

@Component({
  selector: 'app-kanban',
  imports: [KanbanBoard],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css'
})
export class Kanban {

}
