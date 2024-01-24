import { Component } from '@angular/core';
import { ChatEntry } from '../../models/chat-entry';
import { BackendService } from '../backend.service';
import { Subscription } from 'rxjs';
import { env } from '../../env';

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

  private entriesSubscription:Subscription | undefined;

  constructor(private backend:BackendService){
    this.entriesSubscription = this.backend.entries.subscribe((newValue) => {
      this.entries = newValue;
    });

    /*setInterval(() => {
      this.backend.getEntries();
    }, env.refreshInterval);*/
  }

  ngOnDestroy(){
    this.entriesSubscription?.unsubscribe();
  }
}
