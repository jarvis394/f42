import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LinksController } from './links.controller'
import { LinksService } from './links.service'
import { LinkSchema } from './schemas/link.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }])],
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
