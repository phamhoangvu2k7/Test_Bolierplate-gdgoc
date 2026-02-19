import { TestRepository } from "../test.repository";

class Service {
    constructor() {
        this.repository = TestRepository;
    }

    async findAll(page, size) {
        const data = await this.repository.findAll(page, size);

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

    async updateOne(id, body) {
        const data = await this.repository.updateOne(id, body);
        
        return data;
    }
}

export const TestService = new Service();