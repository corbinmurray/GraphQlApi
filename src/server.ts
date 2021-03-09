import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import fs from "fs";
import { Query } from "./graphql/resolvers/Query";
import { morganMiddleware } from "./configs/morgan.config";

const schemaPath = path.join(
  path.resolve(__dirname),
  "graphql",
  "schema",
  "schema.gql"
);
const typeDefs = fs.readFileSync(schemaPath, "utf-8");
const resolvers = {
  Query,
};
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });
app.use(morganMiddleware);

app.listen(9876, () =>
  console.log("Server is listening at http://localhost:9876/graphql")
);
