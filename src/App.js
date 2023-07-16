import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'
import SuperHeroesPage from './components/SuperHeroes.page';
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import HomePage from './components/Home.page';
import Root from './components/Root'
import RQSuperHeroPage from './components/RQSuperHero.page';
import { ParallelQueriesPage } from './components/ParallelQueries.page';
import DynamicParallelPage from './components/DynamicParallelQueries';
import DependentQueries from './components/DependentQueries';
import PaginatedQueries from './components/PaginatedQueries';
import InfiniteQueriesPage from './components/InfiniteQueriesPage';

const queryClient = new QueryClient()
function App() {
  console.log(queryClient);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} >
        <Route index element={<HomePage />} />
        <Route path='rq-parallel' element={<ParallelQueriesPage/>}/>
        <Route path='rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1,3]}/>}/>
        <Route path='rq-dependent' element={<DependentQueries email='elephant@savanna.com'/>}/>
        <Route path='rq-paginated' element={<PaginatedQueries />}/>
        <Route path='rq-infinite' element={<InfiniteQueriesPage />}/>
        <Route path='super-heroes' element={<SuperHeroesPage />} />
        <Route path='rq-super-heroes'>
          <Route index element={<RQSuperHeroesPage />} />
          <Route path=":id" element={<RQSuperHeroPage />} />
        </Route>
      </Route>
    )
  )
  return (

    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>

      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
