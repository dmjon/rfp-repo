/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequest = /* GraphQL */ `
  mutation CreateRequest(
    $input: CreateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    createRequest(input: $input, condition: $condition) {
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
export const updateRequest = /* GraphQL */ `
  mutation UpdateRequest(
    $input: UpdateRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = /* GraphQL */ `
  mutation DeleteRequest(
    $input: DeleteRequestInput!
    $condition: ModelRequestConditionInput
  ) {
    deleteRequest(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
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
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
