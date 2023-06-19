import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
 

@Module({
  imports: [
    ConfigModule.forRoot(),
    InfrastructureModule, ],
  controllers: [
    AppController],
  providers: [
    AppService],
})
export class AppModule { }
