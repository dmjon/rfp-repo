/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onCreateRequest(filter: $filter) {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onUpdateRequest(filter: $filter) {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
    onDeleteRequest(filter: $filter) {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
    onCreateFile(filter: $filter) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
    onUpdateFile(filter: $filter) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
    onDeleteFile(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
