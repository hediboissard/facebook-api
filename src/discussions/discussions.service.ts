import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma, Discussion } from '@prisma/client';

@Injectable()
export class DiscussionsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DiscussionCreateInput): Promise<Discussion> {
    return this.prisma.discussion.create({
      data,
      include: { messages: true },
    });
  }

  async findAll() {
    return this.prisma.discussion.findMany({
      include: { messages: { include: { commentaires: true } }, event: true, group: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.discussion.findUnique({
      where: { id },
      include: { messages: { include: { commentaires: true, author: true } } },
    });
  }
}