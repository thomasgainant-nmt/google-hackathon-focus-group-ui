import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env';
import { ChatEntry } from '../models/chat-entry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  public entries:BehaviorSubject<ChatEntry[]> = new BehaviorSubject<ChatEntry[]>([]);

  constructor(private http: HttpClient) { }

  getEntries(){
    this.http.get<ChatEntry[]>(env.getURL).subscribe((entries:ChatEntry[]) => {
      this.entries.next(entries);
    });
  }

  sendRequest(content:string){
    this.http.post(env.sendURL, new ChatEntry(content, false)).subscribe(() => {
      
    });
  }
}
