import { gql, OperationVariables, QueryOptions } from "@apollo/client";
import { getClient } from "./graphqlClient";
import { Fruit } from "@/app/fruits/columns";

const base = process.env.API_BASE_URL;

export async function fetchFruits(): Promise<Fruit[]> {
  const url = `${base}/fruits`;
  const response = await fetch(url);
  return await response.json();
}

export async function fetchFruitsGraphql() {
  const client = getClient();
  const getFruits = gql`
    query GetFruits($first: Int) {
      fruits(first: $first, orderBy: { PLU: null }) {
        items {
          BotanicalName
          Category
          PLU
          Size
          Variety
          Commodity
          Id
        }
        endCursor
        hasNextPage
      }
    }
  `;
  const options: QueryOptions<OperationVariables, any> = {
    query: getFruits,
    variables: {
      first: 20,
    },
  };

  try {
    const { data } = await client.query(options);
    return data.fruits;
  } catch (ex) {
    console.error(ex);
    return null;
  }
}
