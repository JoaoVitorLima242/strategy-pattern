import ContextStrategy from "./src/base/contextStrategy.js";
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js";
import PostgresStrategy from "./src/strategies/postgresStrategy.js";

const postgresConnectionsString =
  "postgres://joaovitor:senha123@localhost:5432/heroes";
const mongoDBConnectionString = "mongodb://joaovitor:senha123@localhost:27017/heroes"

const postgresContext = new ContextStrategy(
  new PostgresStrategy(postgresConnectionsString)
);
const mongoDBContext = new ContextStrategy(
  new MongoDBStrategy(mongoDBConnectionString)
);

await mongoDBContext.connect();

const data = [
  {
    name: "joaovitor",
    type: "transaction",
  },
  {
    name: "gabrielsousa",
    type: "activityLog",
  },
];

// await postgresContext.create(data[0]);
// const select = await postgresContext.read();
// console.log({ select });
// await mongoDBContext.create(data[0]);
const read = await mongoDBContext.read();
console.log({ read });
