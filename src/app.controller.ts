import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { BusinessException } from './comm/exceptions/business.exception';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Version([VERSION_NEUTRAL, '1'])
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findError')
  @Version([VERSION_NEUTRAL, '1'])
  findError() {
    const a: any = {};
    console.log(a.b.c);
    return '2';
  }

  @Get('Test')
  @Version([VERSION_NEUTRAL, '1'])
  Test() {
    return this.configService.get('TEST_VALUE').name;
  }

  @Get('findBusinessError')
  @Version([VERSION_NEUTRAL, '1'])
  findBusinessError() {
    const a: any = {};
    try {
      console.log(a.b.c);
    } catch (error) {
      throw new BusinessException('你这个参数错了');
    }
    return '1';
  }
}
