import { EditarComponent } from './editar/editar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home/tabs/estudiantes',
    pathMatch: "full"
  },
  {
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path: "estudiantes",
        // component: EstudiantesComponent
        children:[
          {
            path:'',
            loadChildren: () => import('./estudiantes/estudiantes.module').then((m)=>m.EstudiantesModule)
          }
        ]

      },
      {
        path: "agregar",
        component: AgregarComponent
      },
      {
        path: "editar",
        component: EditarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
