import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma, Event } from '@prisma/client';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.EventCreateInput): Promise<Event> {
    return this.prisma.event.create({
      data,
      include: { organisateurs: true, participants: true },
    });
  }

  async findAll() {
    return this.prisma.event.findMany({
      include: { organisateurs: true, participants: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.event.findUnique({
      where: { id },
      include: { organisateurs: true, participants: true, groupe: true },
    });
  }
}