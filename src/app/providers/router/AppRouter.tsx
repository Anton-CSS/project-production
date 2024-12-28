import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react'
import { ErrorPage } from 'pages'

const AppLazy = lazy(() => import ('../../App'))
const AboutPageLazy = lazy(() => import('../../../pages/ui/AboutPage'))

const enum Routers {
  MAIN = '/',
  ABOUT = 'about',
}

export const appRouter = createBrowserRouter([
  {
    path: Routers.MAIN,
    element: <Suspense fallback={<h2>Loading...</h2>}>
      <div className="page-wrapper">
        <AppLazy/>
      </div>
    </Suspense>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: Routers.ABOUT,
        element: <Suspense fallback={<h2>Loading...</h2>}>
          <div className="page-wrapper">
            <AboutPageLazy/>
          </div>
        </Suspense>
      }
    ]
  }
])