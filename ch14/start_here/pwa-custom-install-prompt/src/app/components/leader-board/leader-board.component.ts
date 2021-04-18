import { Component, Input, OnInit } from '@angular/core';
import { IScore } from 'src/app/interfaces/score.interface';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss'],
})
export class LeaderBoardComponent implements OnInit {
  @Input() scores: IScore[] = [];
  constructor() {}

  ngOnInit(): void {}
}
