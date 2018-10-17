import { Component, OnInit } from '@angular/core';

// Para importar los filtros validos
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes: number;

  filtrosValidos: fromFiltro.filtrosValidos [] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFiltro.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe( state => {

      this.contarPendientes( state.todos );
      this.filtroActual = state.filtro;

    });
  }

  cambiarFiltro( nuevoFiltro: fromFiltro.filtrosValidos ) {
    const action = new fromFiltro.SetFiltroAction(nuevoFiltro);
    this.store.dispatch( action );
  }

  contarPendientes( todos: Todo[]) {
    // Retorna el length del arreglo con todos pendientes
    this.pendientes = todos.filter( todo => !todo.completado).length;
  }

  borrarCompletados() {
    const action = new fromTodo.BorrarTodoCompletadoAction();
    this.store.dispatch( action );
  }

}
