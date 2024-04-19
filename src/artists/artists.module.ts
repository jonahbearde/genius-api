import { Module } from '@nestjs/common'
import { ArtistsService } from './artists.service'
import { ArtistsController } from './artists.controller'
import { artistProviders } from './artists.providers'
import { DatabaseModule } from 'src/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [ArtistsController],
  providers: [...artistProviders, ArtistsService],
})
export class ArtistsModule {}
