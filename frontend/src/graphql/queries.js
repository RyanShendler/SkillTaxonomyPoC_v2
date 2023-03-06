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

export const GetUnconnectedNodes = gql`
  query GetUnconnectedNodes($parentId: String!) {
    getUnconnectedNodes(parentID: $parentId) {
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
