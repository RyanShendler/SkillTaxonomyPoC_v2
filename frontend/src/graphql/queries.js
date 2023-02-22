import { gql } from "@apollo/client";

export const GetTaxonomy = gql`
  query GetTaxonomy {
    getTaxonomy {
      id
      name
      parent
    }
  }
`;
