import { EstudiantesService } from './estudiantes.service';
import { EstudianteModel } from './estdudiantes.model';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
})
export class EstudiantesComponent implements OnInit {

  estudiantes: EstudianteModel[]=[];
  constructor(private estudiantesService: EstudiantesService) { 

      this.loadEstudiantes(); 

  }
  ngOnInit() {}

loadEstudiantes(){
  this.estudiantesService.getEstudiantes().subscribe((data:EstudianteModel[])=>{
    this.estudiantes=data;
  });
}


 

}
