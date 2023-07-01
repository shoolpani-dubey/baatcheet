import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Use port number from the PORT environment variable or 3000 if not specified
const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
