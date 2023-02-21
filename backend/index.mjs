import * as fs from 'fs';
import neo4j from "neo4j-driver";
import { Neo4jGraphQL } from "@neo4j/graphql";
import { ApolloServer } from "apollo-server";

const typeDefs = fs.readFileSync('./schema.graphql', 'utf8').toString();

const driver = neo4j.driver(
  "neo4j://localhost:7687",
  neo4j.auth.basic("neo4j", "1234")
);

const neoSchema = new Neo4jGraphQL({typeDefs, driver})
neoSchema.getSchema().then((schema) => {
    const server  = new ApolloServer({schema})
    server.listen().then(({url}) => {
        console.log(`Server ready at ${url}`)
    })
})
