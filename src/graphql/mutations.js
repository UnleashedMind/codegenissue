/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      type
      owner
      score
      createdAt
      updatedAt
      towers {
        total
        nextToken
      }
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      type
      owner
      score
      createdAt
      updatedAt
      towers {
        total
        nextToken
      }
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      type
      owner
      score
      createdAt
      updatedAt
      towers {
        total
        nextToken
      }
    }
  }
`;
export const createTower = /* GraphQL */ `
  mutation CreateTower(
    $input: CreateTowerInput!
    $condition: ModelTowerConditionInput
  ) {
    createTower(input: $input, condition: $condition) {
      id
      location {
        lat
        lon
      }
      playerOwner
      createdAt
      updatedAt
      player {
        type
        owner
        score
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateTower = /* GraphQL */ `
  mutation UpdateTower(
    $input: UpdateTowerInput!
    $condition: ModelTowerConditionInput
  ) {
    updateTower(input: $input, condition: $condition) {
      id
      location {
        lat
        lon
      }
      playerOwner
      createdAt
      updatedAt
      player {
        type
        owner
        score
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteTower = /* GraphQL */ `
  mutation DeleteTower(
    $input: DeleteTowerInput!
    $condition: ModelTowerConditionInput
  ) {
    deleteTower(input: $input, condition: $condition) {
      id
      location {
        lat
        lon
      }
      playerOwner
      createdAt
      updatedAt
      player {
        type
        owner
        score
        createdAt
        updatedAt
      }
    }
  }
`;
