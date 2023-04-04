import { Module } from '@nestjs/common';
import { TrailService } from './trail.service';
import { TrailResolver } from './trail.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trail } from './entities/trail.entity';
import { Content } from 'src/content/entities/content.entity';
import { ContentService } from 'src/content/content.service';

@Module({
  imports: [TypeOrmModule.forFeature([Trail, Content])],
  providers: [TrailResolver, TrailService, ContentService],
})
export class TrailModule {}
