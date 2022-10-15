import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule, { cors: true });
  await app.listen(3001);
}
bootstrap();
