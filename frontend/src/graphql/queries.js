import { gql } from "@apollo/client";

export const GetTaxonomy = gql`
  query GetTaxonomy {
    getTaxonomy {
      id
      name
      parents
      depth
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

export const GetUnconnectedSkills = gql`
  query GetUnconnectedSkills($parentId: String!) {
    getUnconnectedSkills(parentID: $parentId) {
      id
      name
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
