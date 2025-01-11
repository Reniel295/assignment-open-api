import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttackOnTitanService } from './attack-on-titan/attack-on-titan.service';
import { AttackOnTitanController } from './attack-on-titan/attack-on-titan.controller';

@Module({
  imports: [],
  controllers: [AppController, AttackOnTitanController],
  providers: [AppService, AttackOnTitanService],
})
export class AppModule {}
