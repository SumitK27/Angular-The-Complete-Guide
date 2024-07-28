import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask, Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  userName = input.required<string | undefined>();
  tasks: Task[] = [];
  isAddingTask: boolean = false;
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId());
  }

  constructor(private tasksService: TasksService) {}

  // Not working
  // selectedUserTasks = computed(() =>
  //   this.tasks.filter((task) => task.userId === this.userId()),
  // );

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
