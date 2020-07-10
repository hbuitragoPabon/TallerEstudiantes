import { EstudiantesService } from './estudiantes.service';
import { EstudianteModel } from './estdudiantes.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
})
export class EstudiantesComponent implements OnInit {

  estudiantes: EstudianteModel[] = [];
  estudiantesAll: EstudianteModel[] = [];

  constructor(private estudiantesService: EstudiantesService,
    public alertController: AlertController) {

    this.loadEstudiantes();

  }
  ngOnInit() { }

  loadEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe((data: EstudianteModel[]) => {
      this.estudiantes = data;
      this.estudiantesAll = data;
    });
  }

  search(evt) {
    const text: string = evt.srcElement.value;
    if (!text) {
      this.loadEstudiantes();
    }
    this.estudiantes = this.estudiantesAll.filter((e: EstudianteModel) => {
      if (e.nombres.toLocaleLowerCase().indexOf(text.toLocaleLowerCase()) !== -1) {
        return e;
      }
    });
  }

  async delete(id) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmacion!',
      message: 'Desea eliminar el estudiante?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            console.log('Confirm Okay');
            this.estudiantesService.deleteEstudiante(id).subscribe((respuesta) => {
              this.loadEstudiantes();
            });
          }
        }
      ]
    });

    await alert.present();

  }
}
