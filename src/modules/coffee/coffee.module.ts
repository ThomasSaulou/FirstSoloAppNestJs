import { Module } from '@nestjs/common';
import { CoffeeController } from './controllers/coffee/coffee.controller';
import { CoffeeService } from './services/coffee/coffee.service';

@Module({
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
