import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EstudiantesComponent } from './estudiantes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [EstudiantesComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(
      [
        {
          path:'',
          component:EstudiantesComponent,
        }
      ]
    )
  ]
})
export class EstudiantesModule { }
