import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {ClickCounterService} from './services/click-counter.service';
import {ComponentAComponent} from './component-a/component-a.component';
import {ComponentBComponent} from './component-b/component-b.component';
import {ComponentCComponent} from './component-c/component-c.component';
import {ListComponent} from './list/list.component';
import {ListItemComponent} from './list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
    ListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ClickCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
