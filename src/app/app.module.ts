import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomGrilleModule } from 'src/app/zoom-grille/zoom-grille.module';
import { HighlightDirective } from './highlight.directive';
import { DelayDirective } from './delay.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    DelayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZoomGrilleModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
