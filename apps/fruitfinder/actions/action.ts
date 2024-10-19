"use server";
import { graphqlClient } from "@/lib/graphqlClient";
import { gql } from "@apollo/client";

export interface User {
  id?: number;
  name: string;
  email: string;
  oid: string;
  zipCode: string;
}

export interface UserResult extends User {
  success: boolean;
  error: string;
}

export async function createUser(user: User): Promise<UserResult> {
  console.log("Creating user", user);
  const client = graphqlClient();
  const now = new Date().toISOString();

  const q = gql`
    mutation add(
      $email: String!
      $name: String!
      $oid: String!
      $zipCode: String!
      $createdAt: DateTime!
      $updatedAt: DateTime!
    ) {
      createUser(
        item: {
          CreatedAt: $createdAt
          Email: $email
          Name: $name
          Oid: $oid
          UpdatedAt: $updatedAt
          Zipcode: $zipCode
        }
      ) {
        Oid
        Id
      }
    }
  `;

  try {
    const { email, name, oid, zipCode } = user;
    const createdAt = now;
    const updatedAt = now;
    const result = await client.mutate({
      mutation: q,
      variables: { email, name, oid, zipCode, createdAt, updatedAt },
    });
    const addedUser = {
      ...user,
      id: result.data.createUser.Id,
      success: true,
      error: "",
    };
    console.log("Added user", addedUser);
    return addedUser;
  } catch (e) {
    console.error("Error creating user", e);
    if (e instanceof Error) {
      return { success: false, error: e.message, ...user };
    }
    return { success: false, error: "Error creating user", ...user };
  }
}
