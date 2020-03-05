import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FooterClickedEvent} from './footer-clicked.event';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input()
  title = 'Footer';

  @Output()
  titleClick = new EventEmitter<FooterClickedEvent>();
  private totalClicks = 0;

  handleTitleClick() {
    const event = new FooterClickedEvent(++this.totalClicks);
    this.titleClick.next(event);
  }
}
