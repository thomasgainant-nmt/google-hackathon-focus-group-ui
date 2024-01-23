import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatInputComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
