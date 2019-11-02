import { CacheModule, Module, CacheInterceptor } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'
import { LinksModule } from './links/links.module'
import { GoModule } from './go/go.module'
import * as config from './config/keys'

@Module({
  imports: [
    CacheModule.register({
      ttl: 5,
      max: 1000
    }),
    MongooseModule.forRoot(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    LinksModule,
    GoModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
