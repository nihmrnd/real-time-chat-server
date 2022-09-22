import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*'
  },
})
export class MessagesGateway {
  @WebSocketServer()
    server: Server;
  constructor(private readonly messagesService: MessagesService) {}

  @SubscribeMessage('createMessage')
  create(@MessageBody() createMessageDto: CreateMessageDto) {
    return this.messagesService.create(createMessageDto);
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  //allow the user to identify who their are
  @SubscribeMessage('join')
  joinRoom() {
    
  }

  //animation to show when a user is typing
  @SubscribeMessage('typing')
  async typing() {
    
  }
}
