import { CreateInstagramDto } from './dto/create-instagram.dto';
import { UpdateInstagramDto } from './dto/update-instagram.dto';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class InstagramService {
  private accessToken = 'EABDp8ed8zzsBOZCUrqXdFntrubepRZBYU78URCMYCbAFAIAZCIQ54kYFJOgFgU0n4GzBRtg5bm4RYbF2dcGo0Vyhx309UprbSKRXNjSrSJGbryjy4ZBoJRZA1LlYq2mx4xZCRzbQSDV0YFcK4AZCJflQplLx94EzggoR76j98kRf4eWOdGFIMCwVmYzYiYsJPFjRGKQQCplwzZBVlGxAqRGFZCnrmwO713IOZCu0H2LnwlNCXxXybYD1pCK2rLMrstzyqIEh38HgIZD';

  async getRandomFollower(instagramUsername: string): Promise<string> {
    try {
      const userId = await this.getInstagramUserId(instagramUsername);

      const followers = await this.getFollowers(userId);

      if (!followers || followers.length === 0) {
        throw new HttpException('No followers found', HttpStatus.NOT_FOUND);
      }

      const randomFollower = followers[Math.floor(Math.random() * followers.length)];

      return randomFollower.username;
    } catch (error) {
      throw new HttpException(error.response?.data || 'Failed to fetch followers', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getInstagramUserId(username: string): Promise<string> {
    try {
      const response = await axios.get(
          `https://graph.facebook.com/v12.0/instagram_user_search`,
          {
            params: {
              q: username,
              access_token: this.accessToken,
            },
          },
      );

      const data = response.data;
      if (!data || !data.data || data.data.length === 0) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      return data.data[0].id;
    } catch (error) {
      throw new HttpException('Failed to fetch user ID', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async getFollowers(userId: string): Promise<any[]> {
    try {
      const response = await axios.get(
          `https://graph.instagram.com/${userId}/followers`,
          {
            params: {
              access_token: this.accessToken,
            },
          },
      );

      console.log(response.data.data)

      return response.data.data;
    } catch (error) {
      throw new HttpException('Failed to fetch followers', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
