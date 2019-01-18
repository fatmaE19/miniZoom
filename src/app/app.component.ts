import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'miniZoom';

  names: { text?: string }[] = [];

public addName(): void {
  this.names.push({});
}

public removeName(): void {
  this.names.pop();
}


}
