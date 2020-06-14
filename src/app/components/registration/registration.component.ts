import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  name: string;
  @Output() setName = new EventEmitter<{name: string}>();

  constructor( private snackBar: MatSnackBar) { }

  registration() {
    if (this.name === undefined || this.name === '') {
      this.openSnackBar();
    } else {
      this.setName.emit({
        name: this.name
      });
    }
  }

  openSnackBar() {
    this.snackBar.open('Kérlek add meg a neved!', 'Rendben', {
      duration: 3000
    });
  }

  ngOnInit(): void {
  }

}
