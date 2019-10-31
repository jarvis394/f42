import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { LinkModel, Link } from './interfaces/link.interface'
import * as shortid from 'shortid'

@Injectable()
export class LinksService {
  constructor(
    @InjectModel('Link') private readonly linkModel: Model<LinkModel>
  ) {}

  /**
   * Finds all entries
   */
  async findAll(): Promise<Link[]> {
    return await this.linkModel.find()
  }

  /**
   * Searches for entry by its code
   * @param code Entry's code
   */
  async findOne(code: string): Promise<Link | null> {
    return await this.linkModel.findOne({ code })
  }

  /**
   * Creates entry
   * @param url URL to shortify
   */
  async create(url: string): Promise<Link> {
    const code = shortid.generate()
    const timestamp = Date.now()
    const link = new this.linkModel({
      code,
      url,
      timestamp,
    })

    return await link.save()
  }

  /**
   * Deletes entry
   * @param code Entry's code
   */
  async delete(code: string): Promise<Link> {
    return await this.linkModel.findOneAndRemove({ code })
  }
}
