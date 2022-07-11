import { gql } from '@apollo/client'

export const GET_USER = gql`
    query getUser {
      getUser(id: "6") {
        id
        username
        flowrate
        weeklyAverageShowerTime
        weeklyAverageWaterUsage
      }
    }
  `;