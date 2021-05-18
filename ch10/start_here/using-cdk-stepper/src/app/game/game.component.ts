import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  nameForm = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  submitName() {}
}
