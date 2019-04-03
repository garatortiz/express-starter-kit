import { config } from 'dotenv'
config()

export const development = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: '127.0.0.1',
  dialect: 'postgres',
}
export const test = {
  use_env_variable: 'DATABASE_TEST_URL',
  dialect: 'postgres',
}
export const production = {
  use_env_variable: 'DATABASE_URL',
  dialect: 'postgres',
}
