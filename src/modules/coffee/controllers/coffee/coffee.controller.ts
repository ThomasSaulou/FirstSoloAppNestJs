import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from '../../services/coffee/coffee.service';

@Controller('coffee')
export class CoffeeController {
    constructor(private readonly coffeeService: CoffeeService){}

    @Get()
    findAll():string{
        return this.coffeeService.findAll()
    }
}
