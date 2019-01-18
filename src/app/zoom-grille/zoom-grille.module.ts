import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrilleComponent } from './grille/grille.component';
import { ZoomGrilleRoutingModule } from './zoom-grille-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ZoomService } from 'src/app/zoom-grille/zoom.service';
import { DragDropModule } from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [GrilleComponent],
  imports: [
    CommonModule,
    ZoomGrilleRoutingModule,
    NgbModule,
    DragDropModule
  ],
  providers: [ZoomService],
  exports: [GrilleComponent]
})
export class ZoomGrilleModule { }
