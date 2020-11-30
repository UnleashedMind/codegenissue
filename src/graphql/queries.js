/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $owner: String
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPlayers(
      owner: $owner
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        type
        owner
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($owner: String!) {
    getPlayer(owner: $owner) {
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
export const getPlayersByScore = /* GraphQL */ `
  query GetPlayersByScore(
    $type: String
    $score: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlayersByScore(
      type: $type
      score: $score
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        type
        owner
        score
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTower = /* GraphQL */ `
  query GetTower($id: ID!) {
    getTower(id: $id) {
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
export const listTowers = /* GraphQL */ `
  query ListTowers(
    $filter: ModelTowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerOwner
        createdAt
        updatedAt
      }
      total
      nextToken
    }
  }
`;
export const searchTowers = /* GraphQL */ `
  query SearchTowers(
    $filter: SearchableTowerFilterInput
    $sort: SearchableTowerSortInput
    $limit: Int
    $nextToken: String
  ) {
    searchTowers(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        playerOwner
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
