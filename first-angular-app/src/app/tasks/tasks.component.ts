import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // @Input() name?: string; // ?: means optional
  // @Input() name: string | undefined; // equivalent to the above
  name = input.required<string | undefined>();
}
