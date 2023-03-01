import { gql } from "@apollo/client";

export const GetTaxonomy = gql`
  query GetTaxonomy {
    getTaxonomy {
      id
      name
      parents
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

export const GetRelatedSkills = gql`
  query GetRelatedSkills($skillId: String!) {
    getRelatedSkills(skillID: $skillId) {
      id
      name
    }
  }
`;
