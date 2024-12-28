import {  Outlet } from 'react-router'
import { Suspense, use } from 'react'
import { classNames } from 'share/lib/classNames/classNames'
import {  ThemeContext } from './providers/theme/ui/ThemeContext'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'


const App = () => {
  const { theme } = use(ThemeContext);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <NavBar/>
        <div className="content-page">
          <SideBar/>
          <Outlet/>
        </div>
      </Suspense>

    </div>
  );
};

export default App;