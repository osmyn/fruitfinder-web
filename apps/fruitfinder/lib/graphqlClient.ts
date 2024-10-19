import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "@apollo/client";

const graphqlBase = process.env.GRAPHQL_BASE_URL;
let client: ApolloClient<NormalizedCacheObject> | null = null;

export const graphqlClient = (): ApolloClient<NormalizedCacheObject> => {
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({ uri: graphqlBase }),
      cache: new InMemoryCache(),
    });
  }
  return client;
};
