import { Module } from '@nestjs/common';
import { PrivateFilesService } from './private-files.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrivateFile } from './private-file.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([PrivateFile]), ConfigModule],
  providers: [PrivateFilesService],
  exports: [PrivateFilesService],
})
export class PrivateFilesModule {}
