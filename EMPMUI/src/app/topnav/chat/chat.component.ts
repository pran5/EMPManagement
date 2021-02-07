import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  documents: Observable<string[]>;
  currentDoc: string;
  
  private _docSub: Subscription;
 
  constructor(private chatService: ChatService) { 
    this.documents = this.chatService.documents;
    this._docSub = this.chatService.currentDocument.subscribe(doc => this.currentDoc = doc.id);
   
  }

  ngOnInit(): void {

    

  }


  ngOnDestroy() {
    this._docSub.unsubscribe();
  }

  loadDoc(id: string) {
    this.chatService.getDocument(id);
  }

  newDoc() {
    this.chatService.newDocument();
  }

 
 



  // sendMessage(event: any, userName: string, avatar: string, reply: boolean) {
    

  //   this.messages.push({
  //     text: event.message,
  //     date: new Date(),
  //     reply: reply,
  //     type:  'text',
      
  //     user: {
  //       name: userName,
  //       avatar: avatar,
  //     },
  //   });
  // }

}
