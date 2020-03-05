import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input()
  title: string = 'HEADER';

  @Output()
  titleClick = new EventEmitter();

  handleTitleClick() {
    this.titleClick.next();
  }
}
