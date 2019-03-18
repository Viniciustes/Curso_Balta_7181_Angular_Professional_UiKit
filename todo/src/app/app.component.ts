import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.required
      ])]
    });

    this.todos.push(new Todo(1, 'Correr', false));
    this.todos.push(new Todo(2, 'Malhar', true));
    this.todos.push(new Todo(3, 'Trabalhar', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDoneUndone(todo: Todo) {
    todo.done = !todo.done;
  }
}
