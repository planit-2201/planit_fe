import { gql } from '@apollo/client'

export const GET_USER = gql`
    query getUser {
      getUser(id: "186") {
        id
        username
        flowrate
        weeklyAverageShowerTime
        weeklyAverageWaterUsage
        thirtydayAverageShowerTime
      }
    }
  `;

  export const SUBMIT_RECORD = gql`
    mutation createDailyRecord(
      $date: String!
      $userId: Int!
      $bagCount: Int!
      $containerCount: Int!
      $strawCount: Int!
      $showerTime: Int!
    ) {
      createDailyRecord(input: {
        date: $date
        userId: $userId
        bagCount: $bagCount
        containerCount: $containerCount
        strawCount: $strawCount
        showerTime: $showerTime
      }) {
        containerCount
        date
        showerTime
      }
    }
  `;
