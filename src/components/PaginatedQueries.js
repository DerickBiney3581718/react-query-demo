import axios from "axios"
import { useState } from "react"
import { useQuery } from "react-query"

const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}
const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const { isLoading, isError, error, data } = useQuery(
        ['colors', pageNumber],() => fetchColors(pageNumber), {
            keepPreviousData:true
        }
    )
    if (isLoading)
    {
        return <h2>still Loading...</h2>
    }
    return (
        <div>
            {data?.data.map(color => {
                return (
                    <div key={color.id}>
                        <h2>
                            {color.id}. {color.label}
                        </h2> 
                        </div>
                )
            })}
            <button onClick={() => setPageNumber(pageNumber - 1 )} disabled={pageNumber === 1}>prev</button>
            <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber === 4}>next</button>

        </div>
    )
}

export default PaginatedQueries