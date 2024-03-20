import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { environment } from './environment';
import { UsersModule } from './users/users.module';
import { PackageModule } from './package/package.module';
import { DriversModule } from './drivers/drivers.module';
import { NotificationModule } from './notification/notification.module';
import { MessageModule } from './message/message.module';
import { MailModule } from './mail/mail.module';
import { MessageSincronoModule } from './chat/message-sincrono.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    UsersModule,
    PackageModule,
    DriversModule,
    NotificationModule,
    MessageModule,
    MailModule,
    MessageSincronoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
