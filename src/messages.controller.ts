import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Messages } from './entity/Messages';
import { HttpExceptionFilter } from './messages-exeption.filter';
@Controller('/messages')
@UsePipes(new ValidationPipe({ transform: true })) //Validation by DTO
export class MessagesController {
  constructor(private readonly appService: MessagesService) {}
  @Post()
  @UseFilters(new HttpExceptionFilter())
  storeMessage(@Body() data: Messages): Promise<any> {
    return this.appService.storeMessage(data);
  }
}
