import {AfterViewInit, Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FooterClickedEvent} from './components/footer/footer-clicked.event';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'APP';
  headerClicks = 0;
  footerClicks = 0;

  @ViewChild('listChild')
  list: ListComponent;

  @ViewChildren(ListComponent)
  lists: QueryList<ListComponent>;

  ngAfterViewInit(): void {
    let i = 0;
    this.lists.forEach(l => {
      l.title = 'Custom title #' + (i++);
    })
  }

  onTitleClicked() {
    this.headerClicks += 1;
  }

  onHeaderClicked(event: FooterClickedEvent) {
    this.footerClicks = event.totalClicks;
  }
}
