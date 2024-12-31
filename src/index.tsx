import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router'
import './app/styles/index.scss'
import { ThemeProvider } from 'app/providers/theme'
import { appRouter } from 'app/providers/router/AppRouter'
import 'share/config/i18/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary/ErrorBoundary'

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <ErrorBoundary fallback={<h2>Something went wrong...</h2>}>
      <RouterProvider router={appRouter}/>
    </ErrorBoundary>
  </ThemeProvider>
);