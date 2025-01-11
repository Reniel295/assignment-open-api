import { Controller, Get, Param } from '@nestjs/common';
import { AttackOnTitanService } from './attack-on-titan.service';

@Controller('attack-on-titan')
export class AttackOnTitanController {
  constructor(private readonly attackOnTitanService: AttackOnTitanService) {}

  // Endpoint to fetch all characters
  @Get('characters')
  async getCharacters() {
    return this.attackOnTitanService.getCharacters();
  }

  // Endpoint to fetch a specific character by ID
  @Get('characters/:id')
  async getCharacterById(@Param('id') id: number) {
    return this.attackOnTitanService.getCharacterById(id);
  }
}
