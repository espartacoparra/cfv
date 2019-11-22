import { Component, OnInit } from '@angular/core';
import { environment } from "../environments/environment";
import { LogService } from "../app/services/log.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'confecciones-valentinas-front';
  constructor(private logsevice: LogService) { }

  ngOnInit(): void {
    this.logsevice.loadSession();
  }



}
