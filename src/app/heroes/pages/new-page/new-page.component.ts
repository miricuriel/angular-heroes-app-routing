import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {
public publishers = [
  {id: 'Dc Comics', desc: 'DC - Comics'},
  {id: 'Marvel Comics', desc: 'MV - Comics'},
]
}
