import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'chat-input',
  templateUrl: './chat-input.component.html',
  styleUrl: './chat-input.component.css'
})
export class ChatInputComponent {
  inputForm = new FormGroup({
    content: new FormControl('')
  });

  constructor(private backend:BackendService){

  }

  validateInput(e:KeyboardEvent){
    if(e.key === "Enter"){
      console.log("Sending request...");
      e.preventDefault();
      this.backend.sendRequest(this.inputForm.get('content')?.value!);
    }
  }
}
