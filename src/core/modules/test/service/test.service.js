import { TestRepository } from "../test.repository";

class Service {
    constructor() {
        this.repository = TestRepository;
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

    async deleteOne(id) {
        const data = await this.repository.deleteOne(id);
        
        return data;
    }
}

export const TestService = new Service();