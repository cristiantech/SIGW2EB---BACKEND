import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway,  WebSocketServer } from '@nestjs/websockets';
import { MessageSincronoService } from './message-sincrono.service';

import {  Socket,Server } from 'socket.io';

@WebSocketGateway()
export class MessageSincronoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly messageSincronoService: MessageSincronoService) {}
  
  handleConnection(client: Socket) {
    console.log("Conectado")
  }
  
  handleDisconnect(client: Socket) {
    console.log("Desconectado")
  }



  @WebSocketServer() 
  server: Server;

 
}
