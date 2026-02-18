import { Module } from 'packages/handler/Module';
import { TestController } from './test.controller';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { RecordId } from 'core/common/swagger';
import { CreateTestInterceptor } from 'core/modules/test/interceptor';

export const TestResolver = Module.builder() 
    .addPrefix({
        prefixPath: '/test',
        tag: 'test',
        module: 'TestModule',
    })
    .register([
        {
            route: '/',
            method: 'get',
            controller: TestController.findAll
        },
        {
            route: '/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: TestController.findOne
        },
        {
            route: '/',
            method: 'post',
            body: 'CreateTestDto',
            interceptors: [CreateTestInterceptor],
            controller: TestController.createOne
        },
        {
            route: '/:id',
            method: 'delete',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: TestController.deleteOne
        }
    ]);