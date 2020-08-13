import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    createAccount(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
    )
  }
`;
