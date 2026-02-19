import { Module } from 'packages/handler/Module';
import { TestController } from './test.controller';
import { RecordId, QueryCriteriaDocument } from 'core/common/swagger';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { CreateTestInterceptor } from 'core/modules/test/interceptor';
import { PaginationInterceptor } from 'core/modules/interceptor/filter/pagination.interceptor';

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
            params: [
                QueryCriteriaDocument.page(), 
                QueryCriteriaDocument.size()  
            ],
            interceptors: [PaginationInterceptor],
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
        },
        {
            route: '/:id',
            method: 'patch',
            params: [RecordId],
            body: 'CreateTestDto',
            interceptors: [CreateTestInterceptor],
            controller: TestController.updateOne
        }
    ]);