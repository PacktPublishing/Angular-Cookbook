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
      return JSON.parse(localStorage.getItem(this.gameName)) || [];
    } catch (e) {
      return [];
    }
  }

  setScores(newScoreEntry: IScore): IScore[] {
    let scores = this.getScores();
    const existingScoreIndex = scores.findIndex((scoreItem) => {
      return scoreItem.name === newScoreEntry.name;
    });
    if (existingScoreIndex !== -1) {
      const newScore = scores[existingScoreIndex].score + newScoreEntry.score;
      scores[existingScoreIndex] = {
        ...scores[existingScoreIndex],
        score: newScore,
      };
    } else {
      scores = [...scores, newScoreEntry];
      scores.sort((a, b) => {
        return b.score - a.score;
      });
    }
    localStorage.setItem(this.gameName, JSON.stringify(scores));
    return scores;
  }
}
