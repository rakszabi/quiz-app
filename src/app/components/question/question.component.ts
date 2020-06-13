import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  // @Input() questionInput = new EventEmitter<{question: Question}>();
  @Input() question: Question;
  @Output() answer = new EventEmitter<{answer: string}>();
  buttonIsDisable: boolean;

  constructor() {
    this.buttonIsDisable = true;
  }

  buttonDisableToggler(isDisable: boolean) {
    this.buttonIsDisable = isDisable;
  }

  next(answerTip: string) {
    if (this.buttonIsDisable || answerTip === '' || answerTip === undefined) {
      console.log('Please choose an answer!');
      // TODO: Felugró értesítés
    } else {
      console.log(answerTip);
      this.answer.emit({
        answer: answerTip
      });
      this.buttonDisableToggler(true);
    }
  }

  ngOnInit(): void {
    console.log('From child: ');
    console.log(this.question);
    console.log(this.buttonIsDisable);
  }

}
