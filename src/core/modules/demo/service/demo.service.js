import { DemoRepository } from "../demo.repository";

class Service {
    constructor() {
        this.repository = DemoRepository;
    }

    async findAll() {
        const data = await this.repository.findAll();

        return data;
    }

    async findOne(id) {
        const data = await this.repository.findOne(id);

        return data;
    }

    async createOne(CreateDemoDto) {
        const data = await this.repository.createOne(CreateDemoDto);

        return data;
    }
}

export const DemoService = new Service();