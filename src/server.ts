import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import fs from "fs";
import { Query } from "./graphql/resolvers/Query";
import { morganMiddleware } from "./configs/morgan.config";
import { DateTime } from "./graphql/resolvers/customScalars";
import { authorizationMiddleware } from "./configs/authorization.config";

const schemaPath = path.join(
  path.resolve(__dirname),
  "graphql",
  "schema",
  "schema.gql"
);
const typeDefs = fs.readFileSync(schemaPath, "utf-8");
const resolvers = {
  Query,
  DateTime,
};

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

app.use(morganMiddleware);
app.use(authorizationMiddleware);

server.applyMiddleware({ app });

app.listen(9876, () =>
  console.log("Server is listening at http://localhost:9876/graphql")
);
