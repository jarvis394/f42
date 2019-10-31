import { Document } from 'mongoose';

export interface Link {
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

export interface LinkModel extends Link, Document {}
