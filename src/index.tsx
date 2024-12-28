import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router'
import './app/styles/index.scss'
import { ThemeProvider } from 'app/providers/theme'
import { appRouter } from 'app/providers/router/AppRouter'
import 'share/config/i18/i18n'

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <RouterProvider router={appRouter}/>
  </ThemeProvider>
);