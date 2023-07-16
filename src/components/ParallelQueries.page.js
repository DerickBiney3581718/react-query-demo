import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = ()=> {
    return axios.get(`http://localhost:4000/superheroes`)
}
const fetchFriends = ()=> {
    return axios.get(`http://localhost:4000/friends`)
}
export const ParallelQueriesPage = () => {
  const {data: heroesData} = useQuery("super-heroes", fetchSuperHeroes)
   const {data:friendsData} = useQuery("friends", fetchFriends)
   console.log('friends and heroes',heroesData, friendsData);
  return (
    <div>ParallelQueries.page</div>
  )
}
