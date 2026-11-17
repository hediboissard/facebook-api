import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DiscussionsService } from './discussions.service.js';
import { Prisma } from '@prisma/client';

@Controller('discussions')
export class DiscussionsController {
  constructor(private readonly discussionsService: DiscussionsService) {}

  @Post()
  create(@Body() data: Prisma.DiscussionCreateInput) {
    return this.discussionsService.create(data);
  }

  @Get()
  findAll() {
    return this.discussionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discussionsService.findOne(id);
  }
}