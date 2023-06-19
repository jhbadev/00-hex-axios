/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from '@nestjs/common';
import { UserDto } from '../../application/dtos/user.dto';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {


    @Get()
    @ApiOkResponse({ type: UserDto, isArray: false })
    getUser() {
        return "controller User"
    }


}
