import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER_RECORDS } from './Queries.js';
import dayjs from 'dayjs';


function FindUserRecords({ allRecords, setAllRecords, isDailyRecordSubmitted, setDailyRecordSubmitted }) {
  const { loading, error, data } = useQuery(GET_USER_RECORDS)

  useEffect(() => {
    if (data) {
      setAllRecords(data.getUserDailyRecords)
      setDailyRecordSubmitted(data.getUserDailyRecords.find(record => record.date === dayjs(Date()).format('YYYY-MM-DD')) !== undefined)
    }
  }, [data])
}

export default FindUserRecords
