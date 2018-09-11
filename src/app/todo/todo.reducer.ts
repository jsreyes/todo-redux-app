import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

// Estados pre-cargados
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');
const todo3 = new Todo('Pedir prestado traje Iron Man');

todo2.completado = true;


// Valor inicial
const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer( state = estadoInicial , action: fromTodo.Acciones): Todo[] {

  switch ( action.type ) {
    case fromTodo.AGREGAR_TODO:
      const todo = new Todo( action.texto );
      // Clona el estado actual
      return [...state, todo ];

    case fromTodo.TOOGLE_TODO:
      return state.map( todoEdit => {
        if( todoEdit.id === action.id ) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });

    case fromTodo.EDITAR_TODO:
      return state.map( todoEdit => {
        if ( todoEdit.texto === action.text ) {
          return {
            ...todoEdit
          };
        } else {
          return todoEdit;
        }
      });

    default:
      return state;
  }
}
