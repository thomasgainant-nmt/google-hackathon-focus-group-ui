import { Component } from '@angular/core';
import { ChatEntry } from '../../models/chat-entry';
import { BackendService } from '../backend.service';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  public entries:ChatEntry[] = [
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
    new ChatEntry("Dan the man", false),
    new ChatEntry("Business Integration FTW!!!!111!!", true),
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
    new ChatEntry("Lorem ipsum", false),
    new ChatEntry("Lorem ipsum", true),
  ];

  constructor(backend:BackendService){

  }
}
