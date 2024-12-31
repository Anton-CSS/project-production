import { createBrowserRouter } from 'react-router';
import { lazy, Suspense } from 'react'
import { ErrorPage } from 'pages'
import { PageLoader } from 'widgets/PageLoader'

const AppLazy = lazy(() => import ('../../App'))
const AboutPageLazy = lazy(() => import('../../../pages/ui/AboutPage'))

const enum Routers {
  MAIN = '/',
  ABOUT = 'about',
  NOT_FOUND = '*',
}

export const appRouter = createBrowserRouter([
  {
    path: Routers.MAIN,
    element: <Suspense fallback={<PageLoader/>}>
      <div className="page-wrapper">
        <AppLazy/>
      </div>
    </Suspense>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: Routers.ABOUT,
        element: <Suspense fallback={<PageLoader/>}>
          <div className="page-wrapper">
            <AboutPageLazy/>
          </div>
        </Suspense>
      },
      {
        path: Routers.NOT_FOUND,
        element: <div className="page-wrapper">
          <h1>Ничего не найдено</h1>
        </div>
      }
    ]
  }
])