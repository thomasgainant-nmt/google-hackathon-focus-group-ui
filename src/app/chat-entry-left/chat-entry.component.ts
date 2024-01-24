import { Component, Input } from '@angular/core';

@Component({
  selector: 'chat-entry',
  templateUrl: './chat-entry.component.html',
  styleUrl: './chat-entry.component.css'
})
export class ChatEntryComponent {
  @Input() content:string = "";
  @Input() isAI:boolean = false;
  @Input() isWaiting:boolean = false;

  public customStyle:any = {};

  ngOnInit(){
    setTimeout(() => {
      this.customStyle = {
        "max-width": "100%",
        "padding": "6px"
      };;
    }, 500);
  }
}
