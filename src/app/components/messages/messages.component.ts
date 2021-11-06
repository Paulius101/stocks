import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public messages: Notification[] = [];

  constructor(private messagesService: MessagesService) {
    this.messagesService.onNewMessage.subscribe((msg: Notification) => {
      console.log("Gauta žinutė:", msg);

      this.messages.push(msg);

      setTimeout(() => {
        const messageIndex = this.messages.indexOf(msg);

        this.messages.splice(messageIndex, 1);
      }, 3000);
    });
  }

  ngOnInit(): void {
  }

}
