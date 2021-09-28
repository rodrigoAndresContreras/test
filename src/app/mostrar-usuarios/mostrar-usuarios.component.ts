import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  personas : any = [];
  persona : any = {
    nombre : '',
    apellido : ''

  };

  constructor(private HttpClient : HttpClient) {}


  ngOnInit(): void {
    this.HttpClient.get('http://localhost:8889/usuarios')
    .subscribe(res => {
      this.personas = res;
      console.log(this.personas);

    })
  }

}
