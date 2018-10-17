import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOOGLE_TODO = '[TODO] Toogle todo';
export const TOOGLE_ALL_TODO = '[TODO] Toogle All todo';


export const EDITAR_TODO = '[TODO] Editar todo';
export const BORRAR_TODO = '[TODO] Borrar todo';

export class AgregarTodoAction implements Action {

  readonly type = AGREGAR_TODO;

  constructor( public texto: string ) {}

}

export class ToogleTodoAction implements Action {

  readonly type = TOOGLE_TODO;

  // Recibo un id para saber de quien esta cambiando el Check
  constructor( public id: number ) {}

}

export class ToogleAllTodoAction implements Action {

  readonly type = TOOGLE_ALL_TODO;

  // Recibo un id para saber de quien esta cambiando el Check
  constructor( public completado: boolean ) {}

}


export class EditarTodoAction implements Action {

  readonly type = EDITAR_TODO;

  // Recibo un id para saber de quien esta cambiando el Check
  constructor( public id: number, public texto: string ) {}

}

export class BorrarTodoAction implements Action {

  readonly type = BORRAR_TODO;

  // Recibo un id para saber cual es el que debo borrar
  constructor( public id: number) {}

}

export type Acciones = AgregarTodoAction | ToogleTodoAction | EditarTodoAction | BorrarTodoAction | ToogleAllTodoAction;
