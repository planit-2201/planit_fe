import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';
import { GET_USER } from './Queries'

function FindUser({ setWeeklyAverageShowerTime, setThirtyDayAverageShowerTime, setUsername, setThirtyDayAvgGallons, setThirtyDayAvgStraws, setThirtyDayAvgBags, setThirtyDayAvgBottles, isError, setIsError }) {
    const { loading, error, data } = useQuery(GET_USER);

    useEffect(() => {
        if (data) {
            setWeeklyAverageShowerTime(data.getUser.weeklyAverageShowerTime)
            setThirtyDayAverageShowerTime(data.getUser.thirtydayAverageShowerTime)
            setUsername(data.getUser.username)
            setThirtyDayAvgGallons(data.getUser.thirtydayAverageWaterUsage)
            setThirtyDayAvgStraws(data.getUser.thirtydayUserAverageStrawCount)
            setThirtyDayAvgBags(data.getUser.thirtydayAverageBagCount)
            setThirtyDayAvgBottles(data.getUser.thirtydayAverageBottleCount)
        }
    }, [data])
    if (error) {
        setIsError(true)
    }
}

export default FindUser
