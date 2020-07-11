import { EstudiantesService } from './../estudiantes/estudiantes.service';
import { EstudianteModel } from './../estudiantes/estdudiantes.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  id: string;
  nombres: string;
  apellidos: string;
  cedula: number;
  fechaNacimiento: string;
  email: string;
  telefono: string;
  foto: string


  constructor(private estudiantesService: EstudiantesService, 
    private navController: NavController) { }

  ngOnInit() {}

  guardar(){
    const body: EstudianteModel =
    {
      nombres: this.nombres,
      apellidos: this.apellidos,
      cedula: this.cedula,
      fechaNacimiento: this.fechaNacimiento,
      email: this.email,
      telefono: this.telefono,
      foto: this.foto
    };   
    
    this.estudiantesService.saveEstudiante(body).subscribe(data=>{
       this.navController.back();
    });
  }

}
