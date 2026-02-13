import { Module } from 'packages/handler/Module';
import { DemoController } from './demo.controller';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { RecordId } from 'core/common/swagger';
import { CreateDemoInterceptor } from 'core/modules/demo/interceptor';

export const DemoResolver = Module.builder()
    .addPrefix({
        prefixPath: '/demo',
        tag: 'demo',
        module: 'DemoModule',
    })
    .register([
        {
            route: '/',
            method: 'get',
            controller: DemoController.findAll
        },
        {
            route: '/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: DemoController.findOne
        },
        {
            route: '/',
            method: 'post',
            body: 'CreateDemoDto',
            interceptors: [CreateDemoInterceptor],
            controller: DemoController.createOne
        }
    ]);
