import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get("DEV_DB_HOST"),
      port: +configService.get("DEV_DB_PORT"),
      username: configService.get("DEV_DB_USERNAME"),
      password: configService.get("DEV_DB_PASSWORD"),
      database: configService.get("DEV_DB_DATABASE"),
      entities: [join(process.cwd(), "dist/**/*.entity.js")],
      synchronize: true //only in development, uses migration in prod
    })
  }),
  TasksModule,
  UsersModule,
  AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
