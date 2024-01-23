import { Component } from '@angular/core';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  validateInput(e:KeyboardEvent){
    e.preventDefault();

    if(e.key === "Enter"){
      console.log("Sending request...");
    }
  }
}
