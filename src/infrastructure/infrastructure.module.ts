

import { Module } from '@nestjs/common';
import { AxiosAdapterService, UserController } from './index';
 


@Module({
    imports: [],
    controllers: [UserController],
    providers: [AxiosAdapterService,],
})
export class InfrastructureModule { }
