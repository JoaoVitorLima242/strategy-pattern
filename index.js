import ContextStrategy from "./src/base/contextStrategy.js";
import PostgresStrategy from "./src/strategies/postgresStrategy.js";

const postgresStrategy = new ContextStrategy(new PostgresStrategy());

postgresStrategy.connect();

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
