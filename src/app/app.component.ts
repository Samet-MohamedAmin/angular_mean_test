import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PathService } from './services/path.service';
import * as pathUtils from 'src/app/shared/path.utils';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: Observable<MessageModel>;

  constructor(private http: HttpClient, private pathService: PathService) {}

  ngOnInit(): void {
    this.message = this.http.get<MessageModel>(
      this.pathService.getPath(pathUtils.TEST));
  }

}

interface MessageModel {
  name: string;
}
