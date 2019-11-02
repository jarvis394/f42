import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { LinkSchema } from '../links/schemas/link.schema'
import { GoController } from './go.controller'
import { LinksService } from '../links/links.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }])
  ],
  controllers: [GoController],
  providers: [LinksService]
})
export class GoModule {}
