import { gql } from "@apollo/client";

export const AddChildCategory = gql`
  mutation AddChildCategory($parentId: String!, $name: String!) {
    addChildCategory(parentID: $parentId, name: $name) {
      name
    }
  }
`;
/*
{
    parentId: null,
    name: null
}
*/

export const AddChildSkill = gql`
  mutation AddChildSkill($parentId: String!, $name: String!) {
    addChildSkill(parentID: $parentId, name: $name) {
      name
    }
  }
`;
