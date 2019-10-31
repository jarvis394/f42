import { Injectable } from '@nestjs/common'
import { Link, LinkModel } from './links/interfaces/link.interface'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Link') private readonly linkModel: Model<LinkModel>
  ) {}

  async findOne(code: string): Promise<Link> {
    return await this.linkModel.findOne({ code })
  }
}
