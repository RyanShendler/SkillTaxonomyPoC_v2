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

export const AttachExistingNode = gql`
  mutation AttachExistingNode($parentId: String!, $nodeId: String!) {
    attachExistingNode(parentID: $parentId, nodeID: $nodeId)
  }
`;
/*
{
  parentId: null,
  nodeId: null
}
*/
