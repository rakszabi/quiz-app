import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string;
  @Output() setName = new EventEmitter<{name: string}>();

  constructor() { }

  registration() {
    console.log('name: ' + this.name);
    if (this.name === undefined || this.name === '') {
      console.log('Kérlek adj meg egy nevet!');
    } else {
      console.log('Jó játékot!');
      this.setName.emit({
        name: this.name
      });
    }
  }

  ngOnInit(): void {
  }

}
