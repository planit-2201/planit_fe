import { gql } from '@apollo/client'

export const GET_USER = gql`
	query getUser {
	  getUser(id: "187") {
		id
		username
		flowrate
		weeklyAverageShowerTime
		weeklyAverageWaterUsage
		thirtydayAverageShowerTime
	  }
	}
  `;

  export const GET_USER_RECORDS = gql` 
    query getUserRecords {
      getUserDailyRecords(userId: "187") {
        date
        bagCount
        bottleCount
        strawCount
        showerTime
      }
    }
  `;

  export const SUBMIT_RECORD = gql`
	mutation createDailyRecord(
	  $date: String!
	  $userId: Int!
	  $bagCount: Int!
	  $bottleCount: Int!
	  $strawCount: Int!
	  $showerTime: Int!
	) {
	  createDailyRecord(input: {
		date: $date
		userId: $userId
		bagCount: $bagCount
		bottleCount: $bottleCount
		strawCount: $strawCount
		showerTime: $showerTime
	  }) {
		bottleCount
		date
		showerTime
	  }
	}
  `;


