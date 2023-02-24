import { gql } from "@apollo/client";

export const GetTaxonomy = gql`
  query GetTaxonomy {
    getTaxonomy {
      id
      name
      parent
      type
    }
  }
`;

export const GetUnattachedSkills = gql`
  query GetUnattachedSkills {
    getUnattachedSkills {
      name
      id
    }
  }
`;
