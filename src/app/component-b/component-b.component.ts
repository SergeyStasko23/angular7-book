import { Component, OnInit } from '@angular/core';
import {ClickCounterService} from '../services/click-counter.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  totalClicks = 0;

  constructor(private clickService: ClickCounterService) {}

  ngOnInit() {
    this.clickService.clicked.subscribe((clicks) => {
      this.totalClicks = clicks;
    });
  }

  onClick() {
    this.clickService.click();
  }
}
