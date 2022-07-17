import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER_RECORDS } from './Queries.js';

function FindUserRecords(allRecords, setAllRecords) {
    const { loading, error, data } = useQuery(GET_USER_RECORDS)

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    })
}

export default FindUserRecords