import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {
  dataComments$: Observable<string>;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dataComments$ = this.userService.getDataComments();
  }

}
