import { Module } from '@nestjs/common';
import { PollsService } from './polls.service.js';
import { PollsController } from './polls.controller.js';

@Module({
  controllers: [PollsController],
  providers: [PollsService],
})
export class PollsModule {}
