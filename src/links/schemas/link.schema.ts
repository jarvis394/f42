import { Schema } from 'mongoose'
import * as shortid from 'shortid'

export const LinkSchema = new Schema({
  url: String,
  code: { type: String, unique: true, default: shortid.generate },
  timestamp: { type: Number, default: Date.now },
})
