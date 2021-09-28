import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  personas : stringany[];
  persona : any = {
    nombre:'', 
    apellido:''
  };

  constructor( private usuarios : UserService) { }

  ngOnInit(): void {
    this.getDataUser();
  }

  getDataUser(){
    this.usuarios.getUsers().pipe().subscribe((data) =>{
      
      this.personas = data;
      console.log(this.personas);
    });
  };

}
