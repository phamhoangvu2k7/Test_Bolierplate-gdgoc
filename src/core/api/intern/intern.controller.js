import { createInternDto } from 'core/modules/intern/dto';

const {InternService} = require('core/modules/intern/service/intern.service');
const { ValidHttpResponse } = require('packages/handler/response/validHttp.response');

class Controller {
    constructor() {
        this.service = InternService;
    }

    findAll = async req => {
        const page = parseInt(req.query.page, 10) || 1;
        const size = parseInt(req.query.size, 10) || 10;
        const data = await this.service.findAll(page, size);

        return ValidHttpResponse.toOkResponse(data);
    }

    findOne = async req => {
        const { id } = req.params;
        const data = await this.service.findOne(id);

        return ValidHttpResponse.toOkResponse(data);
    }

    createOne = async req => {
        const data = await this.service.createOne(createInternDto(req.body));

        return ValidHttpResponse.toOkResponse(data);
    }

    deleteOne = async req => {
        const { id } = req.params;
        const data = await this.service.deleteOne(id);

        return ValidHttpResponse.toOkResponse(data);
    }

    updateOne = async req => {
        const { id } = req.params;
        const {body} = req;
        const data = await this.service.updateOne(id, body);

        return ValidHttpResponse.toOkResponse(data);
    }

}

export const InternController = new Controller();