import { Injectable, Inject } from '@nestjs/common'
import { Repository } from 'typeorm'
import { Artist } from './entities/artist.entity'
import { CreateArtistDto } from './dto/create-artist.dto'
import { UpdateArtistDto } from './dto/update-artist.dto'

@Injectable()
export class ArtistsService {
  constructor(
    @Inject('ARTIST_REPOSITORY')
    private artistRepository: Repository<Artist>,
  ) {}

  async findAll(): Promise<Artist[]> {
    return this.artistRepository.find()
  }

  async findOne(id: number): Promise<Artist | null> {
    return this.artistRepository.findOne({ where: { id } })
  }

  async create(createArtistDto: CreateArtistDto) {
    return this.artistRepository.save(createArtistDto)
  }

  async update(id: number, updateArtistDto: UpdateArtistDto) {
    return this.artistRepository.update(id, updateArtistDto)
  }

  async remove(id: number) {
    return this.artistRepository
      .createQueryBuilder()
      .delete()
      .from(Artist)
      .where('id = :id', { id })
      .execute()
  }
}
