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

export const DeleteNode = gql`
  mutation DeleteNode($nodeId: String!) {
    deleteNode(nodeID: $nodeId)
  }
`;

export const AttachExistingSkill = gql`
  mutation AttachExistingSkill($parentId: String!, $skillId: String!) {
    attachExistingSkill(parentID: $parentId, skillID: $skillId) {
      name
      id
    }
  }
`;
/*
{
  parentId: null,
  skillId: null
}
*/
