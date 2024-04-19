import { Module } from '@nestjs/common'
import { databaseProviders } from './database.providers'
import { ConfigModule } from '@nestjs/config'

@Module({
  providers: [...databaseProviders],
  // import config module so providers can inject it
  imports: [ConfigModule],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
