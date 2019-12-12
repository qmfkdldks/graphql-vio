import { MongoDataSource } from "apollo-datasource-mongodb";

export default class MongoApi extends MongoDataSource {
  getUser(userId) {
    return this.findOneById(userId);
  }
}
