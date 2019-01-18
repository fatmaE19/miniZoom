import { Component, OnInit } from '@angular/core';
import { ZoomService } from '../zoom.service';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.scss']
})
export class GrilleComponent implements OnInit {

  nbrLigne: number;
  nbrColonne: number;
  public tranches: any[];
  public items: Array<number> = new Array(2000);

  arrets = [
    {
      "name": 'arret 1',
      "dure": 8,
      "debut": 25,
      "idTranche":"1"
    },
    {
      "name": 'arret 2',
      "dure": 4,
      "debut": 1,
      "idTranche":"2"
    },
    {
      "name": 'arret 3',
      "dure": 2,
      "debut": 14,
      "idTranche":"3"
    },
    {
      "name": 'arret 4',
      "dure": 1,
      "debut": 7,
      "idTranche":"4"
    },
 

  ];
  msg: string;
  constructor(private zoomService: ZoomService) { }

  ngOnInit() {
    this.zoomService.getAllTranche().subscribe((res: any[]) => {
      this.tranches = res;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
  console.log("i am dropped")
    }
}
