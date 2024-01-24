import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env';
import { v4 as uuid } from 'uuid';
import { ChatEntry } from '../models/chat-entry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public sessionID:string = uuid();
  //public sessionID:string = "ab09e5b7-5f01-45fe-8f3d-42bf25d1aef7";

  public entries:BehaviorSubject<ChatEntry[]> = new BehaviorSubject<ChatEntry[]>([]);

  constructor(private http: HttpClient) { }

  getEntries(){
    this.http.get(env.getURL+"?sessionID="+this.sessionID).subscribe((res:any) => {
      this.entries.next(res.prompts!);
    });
  }

  sendRequest(content:string){
    let value = this.entries.getValue();
    if(value == null){
      value = [];
      value.push(new ChatEntry(content, true));
      this.entries.next(value);
    }
    this.http.post(env.sendURL+"?sessionID="+this.sessionID, {"prompt": value}).subscribe(() => {
      
    });
  }
}
