import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post<{ text: string }>('http://localhost:3000/api/chat', { message });
  }
  
}