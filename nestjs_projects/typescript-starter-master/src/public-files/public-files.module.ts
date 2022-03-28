import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicFile } from './public-file.entity';
import { ConfigModule } from '@nestjs/config';
import { PublicFilesService } from './public-files.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicFile]), ConfigModule],
  providers: [PublicFilesService],
  exports: [PublicFilesService],
})
export class PublicFilesModule {}
