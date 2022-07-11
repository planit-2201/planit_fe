import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER } from './Queries'

function FindUser({ weeklyAverageShowerTime, setWeeklyAverageShowerTime}) {
    const { loading, error, data } = useQuery(GET_USER);

    useEffect(() => {
        if (data) {
            console.log(data.getUser.weeklyAverageShowerTime)
            setWeeklyAverageShowerTime(data.getUser.weeklyAverageShowerTime)
        }
    }, [data])
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;
    // // setWeeklyAverageShowerTime(data.getUser.weeklyAverageShowerTime)
    // // console.log(data.getUser.weeklyAverageShowerTime)

    // return <p>{data.getUser.username}</p>
}

export default FindUser

