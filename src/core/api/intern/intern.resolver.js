import { Module } from 'packages/handler/Module';
import { RecordId, QueryCriteriaDocument } from 'core/common/swagger';
import { RecordIdInterceptor } from 'core/modules/interceptor/recordId/record-id.interceptor';
import { CreateInternInterceptor } from 'core/modules/intern/interceptor/create-intern.interceptor';
import { FilterInternInterceptor } from 'core/modules/intern/interceptor/filter-intern.interceptor';
import { InternController } from './intern.controller';

export const InternResolver = Module.builder()
    .addPrefix({
        prefixPath: '/intern',
        tag: 'intern',
        module: 'InternModule',
    })
    .register([
        {
            route: '/',
            method: 'get',
            params: [
                QueryCriteriaDocument.page(),
                QueryCriteriaDocument.size()
            ],
            interceptors: [FilterInternInterceptor],
            controller: InternController.findAll
        },
        {
            route: '/:id',
            method: 'get',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: InternController.findOne
        },
        {
            route: '/',
            method: 'post',
            body: 'CreateInternDto',
            interceptors: [CreateInternInterceptor],
            controller: InternController.createOne
        },
        {
            route: '/:id',
            method: 'delete',
            params: [RecordId],
            interceptors: [RecordIdInterceptor],
            controller: InternController.deleteOne
        },
        {
            route: '/:id',
            method: 'patch',
            params: [RecordId],
            body: 'CreateInternDto',
            interceptors: [CreateInternInterceptor],
            controller: InternController.updateOne
        }
    ]);