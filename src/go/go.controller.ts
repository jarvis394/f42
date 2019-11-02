import { Controller, Get, Redirect, Param, HttpException, HttpStatus } from '@nestjs/common'
import { LinksService } from '../links/links.service'
import * as config from '../config/keys'

@Controller('go')
export class GoController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  root() {
    throw new HttpException('Nothing to see here. You need a /:code', HttpStatus.FORBIDDEN)
  }

  @Redirect(config.BASE_URL, 302)
  @Get(':code')
  async redirect(@Param('code') code: string) {
    const data = await this.linksService.findOne(code)

    if (data) return { url: data.url }
  }
}
