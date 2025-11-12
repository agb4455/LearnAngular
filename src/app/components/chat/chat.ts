import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChatService } from '../../services/chat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [FormsModule,CommonModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  standalone: true,
})
export class Chat {
  messages: { user: string, text: string }[] = [];
  inputText = '';
  loading = false;


  constructor(private chatService: ChatService) {}

  async sendMessage() {
     if (!this.inputText.trim()) return;

      this.messages.push({ user: 'User', text: this.inputText });
      this.loading = true;

      this.chatService.sendMessage(this.inputText).subscribe({
        next: (res) => {
          this.messages.push({ user: 'IA', text: res.text });
          this.loading = false;
        },
        error: () => {
          this.messages.push({ user: 'IA', text: 'Error al conectar con la IA' });
          this.loading = false;
        }
      });

      this.inputText = '';
    }
}