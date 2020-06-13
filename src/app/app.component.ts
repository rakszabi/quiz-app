import { Component, OnInit } from '@angular/core';

import { Question } from './models/question';
import { QuestionService } from './services/question.service';
import { Answer } from './models/answer';
import { AnswerService } from './services/answer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quiz-app';

  questions: Question[];
  gameIsRunning: boolean;
  actQuestion: Question;
  numOfQuestions: number;
  numOfActQuestions: number;
  actAnswersObj: Answer;

  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {
    this.gameIsRunning = false;
    this.actAnswersObj = {
      name: '',
      answers: [],
      times: []
    };
  }

  setName(name: {name: string}) {
    console.log('Hello ' + name.name);
    this.actAnswersObj.name = name.name;
    this.gameIsRunning = true;
    this.begin();
  }

  begin() {
    this.actQuestion = this.questions[0];
    this.numOfActQuestions = 0;
    this.numOfQuestions = this.questions.length;
  }

  addNewAnswer(answer: {answer: string}) {
    console.log('Ejha, bejött egy új válasz: ' + answer.answer);
    this.actAnswersObj.answers.push(answer.answer);
    this.actAnswersObj.times.push(1);
    // TODO: add real time number to the object

    if (this.numOfActQuestions === this.numOfQuestions - 1) {
      console.log('Köszi a játékot!');
      this.uploadNewAnswer(this.actAnswersObj);
    } else {
      this.numOfActQuestions++;
      this.actQuestion = this.questions[this.numOfActQuestions];
    }
  }

  uploadNewAnswer(answer: Answer) {
    this.answerService.addNewAnswer(answer);
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }
}
