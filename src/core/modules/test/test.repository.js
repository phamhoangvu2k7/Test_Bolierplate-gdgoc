import { DataRepository } from "packages/restBuilder/core/dataHandler";

class Repository extends DataRepository {
    findAll() {
        return this.query().select('*').orderBy('id');
    }

    findOne(id) {
        return this.query().select('*').where({ id });
    }

    createOne(body) {
        return this.query().insert(body);
    }

    deleteOne(id) {
        return this.query().delete().where({ id });
    }

    updateOne(id, body) {
        return this.query().update(body).where({ id });
    }
}

export const TestRepository = new Repository('test');