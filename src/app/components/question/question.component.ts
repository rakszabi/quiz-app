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

  constructor() { }

  ngOnInit(): void {
    console.log('From child: ');
    console.log(this.question);
  }

}
