import { useQuery, useQueryClient } from "react-query";
import axios from "axios"

const fetchHero = ({queryKey}) => {
    const id = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${id}`)
}
export const useSuperHeroData = (id) => {
const queryClient = useQueryClient()
    return useQuery(['super-hero', id], fetchHero,
    {
        initialData: () => {
            const hero = queryClient.getQueryData("super-heroes")?.data?.find(hero => hero.id === parseInt(id))
            if (hero)
            {
                return {data: hero}
            }
            else 
            {
                return undefined;
            }
        }
    })  // needs at least two arguments
}
