import * as dotenv from 'dotenv'
import * as fs from 'fs'
import * as Joi from '@hapi/joi'
import * as path from 'path'

type EnvConfig = Record<string, string>

/**
 * Joi validation schema
 */
const envVarsSchema: Joi.ObjectSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production')
    .default('development'),
  PORT: Joi.number().default(3000),
  MONGO_PASSWORD: Joi.string().required(),
  BASE_URL: Joi.string().default('https://localhost:3000/'),
})

/**
 * Validates config by Joi schema
 * @param config Enviroment config
 */
const validate = (config: EnvConfig): EnvConfig => {
  const { error, value: validatedEnvConfig } = envVarsSchema.validate(config)
  if (error) {
    throw new Error(`Config validation error: ${error.message}`)
  }
  return validatedEnvConfig
}

const filePath: string = path.resolve(__dirname, '../../.env')
const env: EnvConfig = validate(dotenv.parse(fs.readFileSync(filePath)))

/**
 * Application main port
 */
export const PORT: number = Number(env.PORT)

/**
 * Base URL for redirection
 */
export const BASE_URL: string = env.BASE_URL

/**
 * MongoDB connection password
 */
export const MONGO_PASSWORD: string = env.MONGO_PASSWORD

/**
 * MongoDB connection URL
 */
export const MONGO_URL: string = `mongodb://db-admin:${MONGO_PASSWORD}@main-shard-00-00-wqpfb.mongodb.net:27017,main-shard-00-01-wqpfb.mongodb.net:27017,main-shard-00-02-wqpfb.mongodb.net:27017/test?ssl=true&replicaSet=Main-shard-0&authSource=admin&retryWrites=true&w=majority`
