import ContextStrategy from "./src/base/contextStrategy.js";
import PostgresStrategy from "./src/strategies/postgresStrategy.js";

const postgresConnectionsString =
  "postgres://joaovitor:senha123@localhost:5432/heroes";

const postgresStrategy = new ContextStrategy(
  new PostgresStrategy(postgresConnectionsString)
);

const result = await postgresStrategy.connect();

console.log({ result });

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
