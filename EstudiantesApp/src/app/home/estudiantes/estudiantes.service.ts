import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EstudianteModel } from './estdudiantes.model';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private httpClient: HttpClient) { }

  getEstudiantes() {
    const url = "https://cedesistemas-app-api.azurewebsites.net/api/Estudiantes";
    return this.httpClient.get(url);
  }

  deleteEstudiante(id) {
    const url = "https://cedesistemas-app-api.azurewebsites.net/api/Estudiantes/" + id;
    return this.httpClient.delete(url);
  }

  saveEstudiante(body: EstudianteModel){
    const url = "https://cedesistemas-app-api.azurewebsites.net/api/Estudiantes";
    return this.httpClient.post(url, body);
  }

}
