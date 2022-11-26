/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      description
      cost
      vendor
      method
      createdAt
      createdBy
      account {
        id
        label
        hasFYBudget
        budgetAmount
        balance
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      files {
        items {
          id
          name
          location
          type
          uploadedBy
          createdAt
          updatedAt
          requestFilesId
        }
        nextToken
      }
      updatedAt
      accountRequestsId
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        cost
        vendor
        method
        createdAt
        createdBy
        account {
          id
          label
          hasFYBudget
          budgetAmount
          balance
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        updatedAt
        accountRequestsId
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      name
      location
      type
      uploadedBy
      createdAt
      updatedAt
      requestFilesId
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        location
        type
        uploadedBy
        createdAt
        updatedAt
        requestFilesId
      }
      nextToken
    }
  }
`;
export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      label
      hasFYBudget
      budgetAmount
      balance
      requests {
        items {
          id
          description
          cost
          vendor
          method
          createdAt
          createdBy
          updatedAt
          accountRequestsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        label
        hasFYBudget
        budgetAmount
        balance
        requests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
