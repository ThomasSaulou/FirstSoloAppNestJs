import { Injectable } from '@nestjs/common';

@Injectable()
export class CoffeeService {

    findAll(){
        return 'here you go Coffees'
    }
}
