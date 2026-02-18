import { DataRepository } from "packages/restBuilder/core/dataHandler";

class Repository extends DataRepository {
    findAll() {
        return this.query().select('*');
    }

    findOne(id) {
        return this.query().select('*').where({ id });
    }

    createOne(body) {
        return this.query().insert(body);
    }
}

export const TestRepository = new Repository('test');