import { CacheModule, Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Post]),
    CacheModule.register({
      ttl: 5,
      max: 100,
    }),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
