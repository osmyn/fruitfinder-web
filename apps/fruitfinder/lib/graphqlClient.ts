import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const graphqlBase = process.env.GRAPHQL_BASE_URL;
let graphqlClient: ApolloClient<any> | null = null;

export const getClient = () => {
  if (!graphqlClient || typeof window === "undefined") {
    graphqlClient = new ApolloClient({
      link: new HttpLink({ uri: graphqlBase }),
      cache: new InMemoryCache(),
    });
  }
  return graphqlClient;
};
