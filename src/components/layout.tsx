import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)


const Layout = (props) => {
    return (
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    );
}
       
export default Layout