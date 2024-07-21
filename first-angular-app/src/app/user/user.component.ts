import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // Property-based
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Output() select = new EventEmitter<string>();
  // get imagePath() {
  //   return `assets/users/${this.avatar}`;
  // }

  // Signal-based
  id = input.required<string>();
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();
  imagePath = computed(() => `assets/users/${this.avatar()}`);

  onSelectUser() {
    // Property-based
    // this.select.emit(this.id);

    // Signal-based
    this.select.emit(this.id());
  }
}
