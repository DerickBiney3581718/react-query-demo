import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios"

const fetchHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

const addSuperHero = (hero) => {
    return axios.post(
        `http://localhost:4000/superheroes`, hero
    )
}
export const useSuperHeroesData = (refetchTime, onSuccess) => {

    return useQuery('super-heroes', fetchHeroes,
        {
            staleTime: 200000,
            refetchOnMount: true,
            // refetchOnWindowFocus:false,
            refetchInterval: refetchTime,
            onSuccess,
            // select: (data) => {
            //     const superHeroNames = data.data.map(hero => hero.name)
            //     return superHeroNames;
            // }
            // enabled:false  for clicks with refetch
        })  // needs at least two arguments
}

export const useAddSuperHeroData = () => {
    const queryClient = useQueryClient()
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            // queryClient.invalidateQueries('super-heroes')
            // data == response from 
            queryClient.setQueryData('super-heroes', (oldQueryData) => {
               return {...oldQueryData, data: [...oldQueryData.data, data.data]}
            })
        }
    })
}