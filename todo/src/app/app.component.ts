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

    this.load();
  }

  add() {
    const id = this.todos.length + 1;
    const title = this.form.controls.title.value;

    this.todos.push(new Todo(id, title, false));
    this.clear();
    this.save();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }

    this.save();
  }

  markAsDoneUndone(todo: Todo) {
    todo.done = !todo.done;

    this.save();
  }

  save() {
    const data = JSON.stringify(this.todos);

    localStorage.setItem('todos', data);
  }

  load() {
    const data = localStorage.getItem('todos');

    this.todos = JSON.parse(data);
  }
}
