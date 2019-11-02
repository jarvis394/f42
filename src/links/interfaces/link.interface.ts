import { Document } from 'mongoose'

export interface Link extends Document {
  /**
   * Date when entry was created
   */
  timestamp: number

  /**
   * Code for access the shorten url
   */
  code: string 

  /**
   * Original URL
   */
  url: string
}
