import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})


export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {
  	this.tarefas = this.listarTodos();
    /**
     * Teste Array Mostrar Informações tarefa Tabela
     * this.tarefas = [
      new Tarefa(1,"Tarefa 1", false),
      new Tarefa(2,"Tarefa 2", true)
    ]
     */
    
    
  }
  listarTodos():Tarefa[]{
    return this.tarefaService.listarTodos();
  }
  remover($event:any, tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?'))
    this.tarefaService.remover(tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o Status da Tarefa "' + tarefa.nome + '"?'))
    this.tarefaService.alterarStatus(tarefa.id);
    this.tarefas = this.tarefaService.listarTodos();
  }

}
