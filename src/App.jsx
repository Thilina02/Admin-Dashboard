import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import './css/style.css';
import Datepicker from './components/Datepicker';
import DropdownEditMenu from './components/DropdownEditMenu';
import DropdownFilter from './components/DropdownFilter';
import DropdownNotifications from './components/DropdownNotifications';
import DropdownProfile from './components/DropdownProfile';
import ModalSearch from './components/ModalSearch';
import ThemeToggle from './components/ThemeToggle';
import Tooltip from './components/Tooltip';
import DropdownHelp from './components/DropdownHelp';
import './charts/ChartjsConfig';
import WelcomeBanner from './partials/dashboard/WelcomeBanner';
import DateSelect from './components/DateSelect';
import New from './pages/New';
// Import pages
import Dashboard from './pages/Dashboard';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/DateSelect" element={<DateSelect />} />
        <Route exact path="/Datepicker" element={<Datepicker />} />
        <Route exact path="/DropdownEditMenu" element={<DropdownEditMenu />} />
        <Route exact path="/DropdownFilter" element={<DropdownFilter />} />
        <Route exact path="/DropdownNotifications" element={<DropdownNotifications />} />
        <Route exact path="/DropdownProfile" element={<DropdownProfile />} />
        <Route exact path="/ModalSearch" element={<ModalSearch />} />
        <Route exact path="/ThemeToggle" element={<ThemeToggle />} />
        <Route exact path="/Tooltip" element={<Tooltip />} />
        <Route exact path="/DropdownHelp" element={<DropdownHelp />} />
        <Route exact path="/WelcomeBanner" element={<WelcomeBanner />} />
        <Route exact path="/New" element={<New />} />
      </Routes>
    </>
  );
}

export default App;
