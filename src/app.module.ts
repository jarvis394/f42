import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LinksModule } from './links/links.module'
import { MONGOOSE_DB_URL } from './config/keys'
import { LinkSchema } from './links/schemas/link.schema'

@Module({
  imports: [
    LinksModule,
    MongooseModule.forRoot(MONGOOSE_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
