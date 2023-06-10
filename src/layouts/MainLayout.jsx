
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { useState } from 'react';

const MainLayout = () => {
    const [darkMode , setDarkMode] = useState(false)
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>
            <NavBar darkMode={darkMode}  handleDarkMode={handleDarkMode} ></NavBar>
            <div className={darkMode ? 'bg-slate-800 md:p-10' : ' md:p-10'}>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;