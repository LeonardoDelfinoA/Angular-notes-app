import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../../modelos/Tarefa';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TarefasComponent implements OnInit {

  tasks:Tarefa[];

  inputTitle:string = "";
  inputContent:string = "";

  titleEdit:string;
  contentEdit:string;

  constructor() {}

  ngOnInit() {
    this.tasks = []
  }

  toggleDone (id:number) {
    this.tasks.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
      return v;
    })

  }

  deleteTodo (id:number) {
    this.tasks = this.tasks.filter((v, i) => i !== id);
  }

  addTodo () {
    if ((this.inputTitle == "" || this.inputContent == "") || 
        (this.inputTitle == null || this.inputContent == null)) {
      alert("Preencha a tarefa e a descrição da tarefa!");
      return;
    }
    this.tasks.push({
      title: this.inputTitle,
      content: this.inputContent,
      completed: false,
      isEdit: false
    });

    this.inputTitle = "";
    this.inputContent = "";
  }

  EditTodo(id:number) {
    this.tasks.map((v, i) => {
      if (i == id) v.isEdit = !v.isEdit;

      return v;
    })    
  }

  doneEdit(id:number) {
    if ((this.titleEdit == "" || this.contentEdit == "") || 
        (this.titleEdit == null || this.contentEdit == null)) {
      alert("Preencha os dois campos para editar!");
      return;
    }
    
    this.tasks.map((v, i) => {
      if (i == id) {

      v.title = this.titleEdit;
      v.content = this.contentEdit;
      v.isEdit = !v.isEdit;

      }

      return v;
    })
    this.titleEdit = "";
    this.contentEdit = "";
  }

  cancelEdit(id:number) {
    this.tasks.map((v, i) => {
      if (i == id) {
        v.isEdit = !v.isEdit;
      }

      return v;
    })
  }

}
