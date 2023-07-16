import { useQueries, } from "react-query"
import axios from "axios"

const fetchSuperHero = (heroId) => {
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallelPage = ({heroIds}) => {
  const queryList =  useQueries(heroIds.map(heroId =>{
        return {
            queryKey: ['superhero', heroId],
            queryFn: () => fetchSuperHero(heroId)
        }}))
        console.log(queryList);
  return (
    <div>DynamicParallelQueries</div>
  )
}

export default DynamicParallelPage