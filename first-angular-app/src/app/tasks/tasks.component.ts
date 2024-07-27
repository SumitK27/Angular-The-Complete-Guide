import { Component, computed, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

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
  tasks: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  }[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basics and advanced features of Angular and how to apply them',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  isAddingTask: boolean = false;
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  // Not working
  // selectedUserTasks = computed(() =>
  //   this.tasks.filter((task) => task.userId === this.userId()),
  // );

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: { title: string; summary: string; date: string }) {
    this.tasks.push({
      id: Math.random().toString(), // not really unique but good enough here!
      userId: this.userId(),
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.isAddingTask = false;
  }
}
