import { Controller, Get, Redirect, Param } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Redirect('https://docs.nestjs.com', 302)
  @Get('go/:code')
  async redirect(@Param('code') code: string) {
    const data = await this.appService.findOne(code)

    if (data) return { url: data.url }
  }
}
