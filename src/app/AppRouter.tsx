import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react'
import { Counter } from '../components/Counter'
import ErrorPage from '../pages/ErrorPage'

const AppLazy = lazy(() => import ('../components/App'))
const AboutPageLazy = lazy(() => import('../pages/AboutPage'))
export const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback={<h2>Loading...</h2>}><AppLazy/></Suspense>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: 'about',
          element: <Suspense fallback={<h2>Loading...</h2>}><AboutPageLazy/></Suspense>
        },
        {
          path: 'counter',
          element: <Counter/>
        }
      ]
    }
])