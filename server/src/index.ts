import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { RootSchema } from '../schema/schema';

const PORT = 4000;
const app = express();

/**
 * GraphQL endpoint / express middlewaare
 */
app.use('/graphql', graphqlHTTP({ schema: RootSchema, graphiql: true }));

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
});
