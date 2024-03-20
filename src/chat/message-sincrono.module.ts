import { Module } from '@nestjs/common';
import { MessageSincronoService } from './message-sincrono.service';
import { MessageSincronoGateway } from './message-sincrono.gateway';

@Module({
  providers: [MessageSincronoGateway, MessageSincronoService],
})
export class MessageSincronoModule {}
