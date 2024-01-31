import ContextStrategy from "./src/base/contextStrategy.js";
import PostgresStrategy from "./src/strategies/postgresStrategy.js";

const postgresConnectionsString =
  "postgres://joaovitor:senha123@localhost:5432/heroes";

const postgresContext = new ContextStrategy(
  new PostgresStrategy(postgresConnectionsString)
);

await postgresContext.connect();

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
const select = await postgresContext.read();
console.log({ select });
