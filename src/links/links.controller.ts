import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common'
import { CreateLinkDto } from './dto/create-link.dto'
import { LinksService } from './links.service'
import { Link } from './interfaces/link.interface'

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  /**
   * Returns all entries
   */
  @Get()
  async getAll(): Promise<Link[]> {
    return this.linksService.findAll()
  }

  /**
   * Creates new entry
   */
  @Post('add')
  create(@Body() { url }: CreateLinkDto): Promise<Link> {
    return this.linksService.create(url)
  }

  /**
   * Returns one entry by its code
   */
  @Get(':code')
  findOne(@Param('code') code: string): Promise<Link> {
    return this.linksService.findOne(code)
  }

  /**
   * Deletes entry
   */
  @Delete(':code')
  delete(@Param('code') code: string): Promise<Link> {
    return this.linksService.delete(code)
  }
}
