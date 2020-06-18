import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';
import { Question } from '../../models/question';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() answer = new EventEmitter<{answer: string, time: number}>();
  buttonIsDisable: boolean;
  TIME: number;
  timeLeft: number;
  timeLeftInSec: number;
  interval;
  timeLeftBtnSize: string;
  timeLeftBtnPos: string;
  timeLeftBtnColor: string;
  snackBarDuration: number;

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.buttonIsDisable = true;
    this.TIME = 10;
    this.timeLeft = 10.00;
    this.timeLeftBtnSize = '36px';
    this.timeLeftBtnPos = '6px';
    this.timeLeftBtnColor = '#3f51b5';
    this.startTimer();
    this.snackBarDuration = 3;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft = this.timeLeft - 0.01;
        this.timeLeft = Math.round(this.timeLeft * 100) / 100;

        if (this.timeLeft === 5) {
          this.timeLeftBtnSize = '40px';
          this.timeLeftBtnPos = '4px';
          this.timeLeftBtnColor = '#db505a';
        }

        if (this.timeLeft === 4.8) {
          this.timeLeftBtnSize = '36px';
          this.timeLeftBtnPos = '6px';
        }

      } else {
        this.timeLeft = this.TIME;
        this.timeLeftBtnColor = '#3f51b5';
        this.answer.emit({
          answer: '-',
          time: 0
        });
      }
      this.timeLeftInSec = Math.ceil(this.timeLeft);
    }, 10);
  }

  buttonDisableToggler(isDisable: boolean) {
    this.buttonIsDisable = isDisable;
  }

  next(answerTip: string) {
    if (this.buttonIsDisable || answerTip === '' || answerTip === undefined) {
      this.openSnackBar();
    } else {
      this.answer.emit({
        answer: answerTip,
        time: 10 - this.timeLeft
      });
      this.timeLeft = this.TIME;
      this.buttonDisableToggler(true);
      this.timeLeftBtnColor = '#3f51b5';
    }
  }

  ngOnInit(): void {
  }

  openSnackBar() {
    this.snackBar.open('Kérlek válassz a lehetőségek közül!', 'Rendben', {
      duration: 3000
    });
  }
}
