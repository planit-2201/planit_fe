import { gql } from '@apollo/client'

export const GET_USER = gql`
    query getUser {
      getUser(id: "8") {
        id
        username
        flowrate
        weeklyAverageShowerTime
        weeklyAverageWaterUsage
        thirtydayAverageShowerTime
      }
    }
  `;