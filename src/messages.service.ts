import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Messages } from './entity/Messages';
import { Repository } from 'typeorm';
@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Messages) private messageRepository: Repository<Messages>,
  ) {}
  async storeMessage(data: Messages): Promise<any> {
    return await this.messageRepository.save(data);
  }
}
