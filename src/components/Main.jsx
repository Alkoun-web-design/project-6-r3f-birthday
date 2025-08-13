import PreHeader from './PreHeader.js';
import Header from './Header.jsx';
import Center from './Center.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import { useState } from 'react';


export default function Main() {
    const [currentPage, setCurrentPage] = useState(<Home />);

    function handleNav(page){
        setCurrentPage(page);
    }
    return(
        <>
            <PreHeader />
            <Header />
            <Center currentPage={currentPage}/>
            <Footer handleNav={handleNav}/>
        </>
    );
}