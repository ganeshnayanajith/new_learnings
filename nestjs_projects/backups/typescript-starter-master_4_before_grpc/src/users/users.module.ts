import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { PrivateFilesModule } from '../private-files/private-files.module';
import { PublicFilesModule } from '../public-files/public-files.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PublicFilesModule,
    PrivateFilesModule,
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
