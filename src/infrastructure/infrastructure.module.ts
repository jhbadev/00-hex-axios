/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { AxiosAdapterService } from './index';


@Module({
    imports: [],
    controllers: [],
    providers: [AxiosAdapterService,],
})
export class InfrastructureModule { }
