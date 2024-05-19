// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }


// import { Controller, Get, UseGuards } from '@nestjs/common';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @Controller('api')
// export class AppController {
//   @UseGuards(JwtAuthGuard)
//   @Get('profile')
//   getProfile() {
//     return { message: 'Profile data' };
//   }
// }

// @Controller('api')
// export class AppController {
//   @UseGuards(JwtAuthGuard)
//   @Get('profile')
//   getProfile() {
//     return { message: 'Profile data' };
//   }
// }