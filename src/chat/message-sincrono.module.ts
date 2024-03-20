import { Module } from '@nestjs/common';
import { MessageSincronoGateway } from './message-sincrono.gateway';

@Module({
  providers: [MessageSincronoGateway],
})
export class MessageSincronoModule {}
