import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER } from './Queries'

function FindUser({ setWeeklyAverageShowerTime, setThirtyDayAverageShowerTime, setUsername}) {
    const { loading, error, data } = useQuery(GET_USER);

    useEffect(() => {
        if (data) {
            console.log(data.getUser.weeklyAverageShowerTime)
            setWeeklyAverageShowerTime(data.getUser.weeklyAverageShowerTime)
            setThirtyDayAverageShowerTime(data.getUser.thirtydayAverageShowerTime)
            setUsername(data.getUser.username)
        }
    }, [data])
}

export default FindUser

