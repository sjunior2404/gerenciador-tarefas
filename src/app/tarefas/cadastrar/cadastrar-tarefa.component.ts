import { Component, ViewChild, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared/tarefa.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit{

  @ViewChild('formTarefa', { static:true }) formTarefa:NgForm | undefined;
  tarefa: Tarefa = new Tarefa();

  constructor(
    private TarefaService:TarefaService,
    private router:Router){ }
  ngOnInit(): void {
    this.tarefa = new Tarefa();
  }


    cadastrar():void{
      if (this.formTarefa != undefined){
        if (this.formTarefa.form.valid){
          this.TarefaService.cadastrar(this.tarefa);
          this.router.navigate(["/tarefas"]);
        }
    }
  }
}
