import {Component, OnInit} from '@angular/core';
import {ClickCounterService} from '../services/click-counter.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  providers: [
    ClickCounterService
  ]
})
export class ComponentAComponent implements OnInit {

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
