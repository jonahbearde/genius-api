import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ArtistsModule } from './artists/artists.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ArtistsModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
