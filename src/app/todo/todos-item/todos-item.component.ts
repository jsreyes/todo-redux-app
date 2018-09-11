import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToogleTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {

  @Input() todo: Todo;
  // Toma el elemento
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;


  // Para tener control de los campos
  chkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    // Me muestra el cambio de cuando selecciona o deselecciona una tarea
    // this.chkField.valueChanges
    //     .subscribe(valor => {
    //         console.log(valor);
    //     });

    this.chkField.valueChanges
    .subscribe( () => {
      const accion = new ToogleTodoAction( this.todo.id );
      this.store.dispatch( accion );
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    });
  }

  terminarEdicion() {
    this.editando = false;

    console.log('Accion de edicion');
  }

}
