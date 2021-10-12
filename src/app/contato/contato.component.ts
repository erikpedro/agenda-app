import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';
import { Contato } from './contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
    const c : Contato = new Contato();
    c.nome = 'Manu'
    c.email = 'AnaBeatriz@gmail.com'
    c.favorito = true;
    this.contatoService.save(c).subscribe(response => {
      console.log(response);
    })
  }

}
