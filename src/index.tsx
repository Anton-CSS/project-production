import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router'
import { appRouter } from './app/AppRouter'
import './styles/index.scss'
import { ThemeProvider } from './theme/ThemeContext'

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <RouterProvider router={appRouter}/>
  </ThemeProvider>
);