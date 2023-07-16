import axios from "axios"
import { useQuery } from "react-query"

const fetchChannelByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchCoursesByChannel = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}
const DependentQueries = ({ email }) => {
    const { data } = useQuery(['user', email], () => fetchChannelByEmail(email))
    const channelId = data?.data.channelId

    useQuery(['channel', channelId], () => fetchCoursesByChannel(channelId),
        { enabled: !!channelId })
    return (
        <div>DependentQueries</div>
    )
}

export default DependentQueries