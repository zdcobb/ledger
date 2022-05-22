"use strict";

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schema");
const app = express();

app.disable("x-powered-by");
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server up and running, listening to port 4000...");
});
