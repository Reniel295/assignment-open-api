import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AttackOnTitanService {
  // Fetch all characters
  async getCharacters() {
    try {
      const response = await axios.get('https://api.attackontitanapi.com/characters');
      return response.data;
    } catch (error) {
      throw new Error('Error fetching characters: ' + error.message);
    }
  }

  // Fetch a character by ID
  async getCharacterById(id: number) {
    try {
      const response = await axios.get(`https://api.attackontitanapi.com/characters/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching character by ID: ' + error.message);
    }
  }
}
