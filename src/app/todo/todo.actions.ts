import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const EDITAR_TODO = '[TODO] Editar todo';




export class AgregarTodoAction implements Action {

  readonly type = AGREGAR_TODO;

  constructor( public texto: string ) {}

}

export class ToogleTodoAction implements Action {

  readonly type = TOOGLE_TODO;

  // Recibo un id para saber de quien esta cambiando el Check
  constructor( public id: number ) {}

}

export class EditarTodoAction implements Action {

  readonly type = EDITAR_TODO;

  // Recibo un id para saber de quien esta cambiando el Check
  constructor( public id: number, public text: string ) {}

}

export type Acciones = AgregarTodoAction | ToogleTodoAction | EditarTodoAction;
