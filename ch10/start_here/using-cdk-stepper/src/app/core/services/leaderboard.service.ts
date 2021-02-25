import { Injectable } from '@angular/core';
import { IScore } from 'src/app/interfaces/score.interface';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  gameName = 'guessGame';
  constructor() {}

  getScores(): IScore[] {
    try {
      return JSON.parse(localStorage.getItem(this.gameName));
    } catch (e) {
      return [];
    }
  }

  setScores(score: IScore): void {
    let scores = this.getScores();
    scores = [...scores, score];
    scores.sort((a, b) => {
      return a.score - b.score;
    });
    localStorage.setItem(this.gameName, JSON.stringify(scores));
  }
}
