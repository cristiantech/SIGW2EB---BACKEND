import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config from './config';
import { environment } from './environment';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
    }),
    DatabaseModule,
    BooksModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
