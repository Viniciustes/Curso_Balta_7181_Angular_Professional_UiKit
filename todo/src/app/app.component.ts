import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minhas Tarefas';

  constructor() {
    this.todos.push('Correr');
    this.todos.push('Estudar');
    this.todos.push('Cozinhar');
  }

  alteraTexto() {
    this.title = 'Novo título';
  }
}
