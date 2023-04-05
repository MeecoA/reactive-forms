import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css'],
})
export class NameGeneratorComponent {
  name = new FormControl(''); //initial value

  updateName() {
    this.name.setValue('Nancy');
  }
}
