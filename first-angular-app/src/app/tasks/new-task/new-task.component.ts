import { Component, inject, input, output, signal } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  close = output<void>();

  userId = input.required<string>();

  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDueDate = signal('');

  // Injecting service with inject method
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDueDate(),
      },
      this.userId(),
    );
    this.close.emit();
  }
}
