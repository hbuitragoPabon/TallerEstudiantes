import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private httpClient: HttpClient) { }

getEstudiantes(){

const url="https://cedesistemas-app-api.azurewebsites.net/api/Estudiantes";
return this.httpClient.get(url);


}

}
