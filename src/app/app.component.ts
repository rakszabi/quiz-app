import { Component, OnInit } from '@angular/core';
import { Question } from './models/question';
import { QuestionService } from './services/question.service';

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

  constructor(private questionService: QuestionService) {
    this.gameIsRunning = false;
  }

  setName(name: {name: string}) {
    console.log('Hello ' + name.name);
    // TODO: add name to the object
    this.gameIsRunning = true;
    this.begin();
  }

  begin() {
    this.actQuestion = this.questions[0];
    this.numOfActQuestions = 0;
    this.numOfQuestions = this.questions.length;
  }

  addNewAnswer(answer: {answer: string}) {
    // TODO: new answer to the object
  }

  ngOnInit(): void {
    this.questionService.getQuestions().subscribe(questions => {
      this.questions = questions;
      console.log(this.questions);
    });
  }
}
