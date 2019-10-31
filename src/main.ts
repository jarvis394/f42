import * as dotenv from 'dotenv'
dotenv.config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { PORT } from './config/keys'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Nest app onfiguration
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT)
}
bootstrap()
