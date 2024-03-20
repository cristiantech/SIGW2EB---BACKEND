import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway,  WebSocketServer } from '@nestjs/websockets';


import {  Socket, Server } from 'socket.io';

@WebSocketGateway()
export class MessageSincronoGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() 
  server: Server;

  handleConnection(client: Socket) {
    console.log("Conectado")
  }
  
  handleDisconnect(client: Socket) {
    console.log("Desconectado")
  }

}
