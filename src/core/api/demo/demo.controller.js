import { CreateDemoDto } from "core/modules/demo/dto";

const { DemoService } = require("core/modules/demo/service/demo.service");
const { ValidHttpResponse } = require("packages/handler/response/validHttp.response");

class Controller {
    constructor() {
        this.service = DemoService;
    }

    findAll = async req => {
        const data = await this.service.findAll();

        return ValidHttpResponse.toOkResponse(data);
    }

    findOne = async req => {
        const { id } = req.params;
        const data = await this.service.findOne(id);

        return ValidHttpResponse.toOkResponse(data);
    }

    createOne = async req => {
        const data = await this.service.createOne(CreateDemoDto(req.body));

        return ValidHttpResponse.toOkResponse(data);
    }
}

export const DemoController = new Controller();