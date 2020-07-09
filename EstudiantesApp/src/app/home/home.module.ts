import { EstudiantesService } from './estudiantes/estudiantes.service';
import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
    EstudiantesComponent,
    AgregarComponent,
    EditarComponent
  ],
  providers:[EstudiantesService]
})
export class HomePageModule {}
