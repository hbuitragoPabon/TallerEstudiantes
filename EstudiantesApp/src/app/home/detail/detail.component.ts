import { EstudiantesModule } from './../estudiantes/estudiantes.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  item: EstudiantesModule;
  
  constructor(private activatedRoute: ActivatedRoute ) { 
this.activatedRoute.params.subscribe((params:EstudiantesModule)=>{
this.item=params;
});

  }

  ngOnInit() {}

}
