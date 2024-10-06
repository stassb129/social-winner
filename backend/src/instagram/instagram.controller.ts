import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { InstagramService } from './instagram.service';
import { CreateInstagramDto } from './dto/create-instagram.dto';
import { UpdateInstagramDto } from './dto/update-instagram.dto';

@Controller('instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get('random-follower')
  async getRandomFollower(@Query('username') username: string): Promise<string> {
    return this.instagramService.getRandomFollower(username);
  }
}
