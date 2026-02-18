import { CreateTestDto } from "core/modules/test/dto";

const {TestService} = require("core/modules/test/service/test.service");
const { ValidHttpResponse } = require("packages/handler/response/validHttp.response");


class Controller {
    constructor() {
        this.service = TestService;
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
        const data = await this.service.createOne(CreateTestDto(req.body));

        return ValidHttpResponse.toOkResponse(data);
    }

    deleteOne = async req => {
        const { id } = req.params;
        const data = await this.service.deleteOne(id);

        return ValidHttpResponse.toOkResponse(data);
    }
}

export const TestController = new Controller();
