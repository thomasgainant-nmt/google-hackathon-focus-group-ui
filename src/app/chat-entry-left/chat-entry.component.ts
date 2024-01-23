import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-entry',
  templateUrl: './chat-entry.component.html',
  styleUrl: './chat-entry.component.css'
})
export class ChatEntryComponent {
  @Input() content:string = "";
  @Input() left:boolean = false;
}
