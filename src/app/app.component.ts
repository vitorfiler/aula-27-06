import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aulaHoje';

  foods: Food[] = [
    {value: 'Gui', viewValue: 'Gui', disabled: true},
    {value: 'Geanderson', viewValue: 'Geanderson'},
    {value: 'Daniel', viewValue: 'Daniel'},
    {value: 'Daniel', viewValue: 'Daniel', disabled: true},
    {value: 'Daniel', viewValue: 'Daniel'},
    {value: 'Daniel', viewValue: 'Daniel', disabled: true},
    {value: 'Daniel', viewValue: 'Daniel'},
    {value: 'Daniel', viewValue: 'Daniel'},
    {value: 'Daniel', viewValue: 'Daniel'},
  ];


}
