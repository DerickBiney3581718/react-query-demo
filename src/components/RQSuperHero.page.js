import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const {id} = useParams()
  const {isLoading, isError, error,data} = useSuperHeroData(id)
  if (isLoading) {
    return <h2>Loading...</h2>
}
if (isError) {
    return <h2>{error.message}</h2>
}
  return (
    <div>{data?.data.name}</div>
  )
}

export default RQSuperHeroPage;