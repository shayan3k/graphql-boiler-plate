const express = require("express");
const expressGraphQL = require("express-graphql");
const schema = require("./schema.js");
const cors = require("cors");

const app = express();

// enable `cors` to set HTTP response header: Access-Control-Allow-Origin: *
app.use(cors());
let PORT = process.env.PORT || 3000;

app.use(
  "/graphql",
  expressGraphQL({
    schema: schema,
    graphiql: true,
  })
);
app.listen(PORT, () => {
  console.log(`Running a GraphQL API server at port ${PORT}`);
});
