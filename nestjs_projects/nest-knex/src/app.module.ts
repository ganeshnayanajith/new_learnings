import { Module } from '@nestjs/common';
import { KnexModule } from 'nest-knexjs';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '8.0.21',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: 'password',
          database: 'nest-knex',
          multipleStatements: true,
        },
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
