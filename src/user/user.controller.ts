import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AddUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @ApiOperation({
    summary: '新增用户',
  })
  @Post('/add')
  create(@Body() user: AddUserDto) {
    return '2';
  }
}
