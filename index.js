import ContextStrategy from "./src/base/contextStrategy.js";
import MongoDBStrategy from "./src/strategies/mongoDBStrategy.js";
import PostgresStrategy from "./src/strategies/postgresStrategy.js";

const postgresConnectionsString =
  "postgres://joaovitor:senha123@localhost:5432/heroes";
const mongoDBConnectionString =
  "mongodb://joaovitor:senha123@localhost:27017/heroes";

const postgresContext = new ContextStrategy(
  new PostgresStrategy(postgresConnectionsString)
);
const mongoDBContext = new ContextStrategy(
  new MongoDBStrategy(mongoDBConnectionString)
);

await postgresContext.connect();
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

const contextTypes = {
  transaction: postgresContext,
  activityLog: mongoDBContext,
};

for (const { type, name } of data) {
  const context = contextTypes[type];
  const newName = `${name}-${new Date().getTime()}`;

  await context.create({ name: newName });
  
  console.log(type, context.dbStrategy.constructor.name);
  console.log(await context.read());
}
