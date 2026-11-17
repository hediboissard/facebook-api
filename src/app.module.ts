import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma/prisma.service.js';
import { UsersModule } from './users/users.module.js';
import { EventsModule } from './events/events.module.js';
import { DiscussionsModule } from './discussions/discussions.module.js';
import { AlbumsModule } from './albums/albums.module.js';
import { PollsModule } from './polls/polls.module.js';
import { TicketsModule } from './tickets/tickets.module.js';
import { ShoppingModule } from './shopping/shopping.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'facebook-api',
    }),
    UsersModule,
    EventsModule,
    DiscussionsModule,
    AlbumsModule,
    PollsModule,
    TicketsModule,
    ShoppingModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
