import axios from "axios"
import { Fragment } from "react"
import { useInfiniteQuery, useQuery } from "react-query"

const fetchColors = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/colors?_limit=3&_page=${pageParam}`)
}
const InfiniteQueriesPage = () => {

    const { isLoading, isError, error, data, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
        'colors', fetchColors,{
            getNextPageParam: (_lastPage, pages) => {
                if (pages.length < 4)
                {
                    return pages.length + 1
                } else {
                    return undefined
                }
            }
        })
    if (isLoading) {
        return <h2>still Loading...</h2>
    }
    return (
        <div>
            {data?.pages.map((group,i) => {
                return (
                    <Fragment key={i}>
               {
                group.data.map(color => 
                    <h2>{color.id}. {color.label}</h2>)
               }
                    </Fragment>
                )
            })}
            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>
            <div> {isFetchingNextPage? 'Fetching...': null} </div>
        </div>
    )
}

export default InfiniteQueriesPage