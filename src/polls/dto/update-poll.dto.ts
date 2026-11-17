import { PartialType } from '@nestjs/mapped-types';
import { CreatePollDto } from './create-poll.dto.js';

export class UpdatePollDto extends PartialType(CreatePollDto) {}
