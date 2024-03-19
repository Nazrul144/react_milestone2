import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [open, setOpen] = useState([]);
    const routes = [
        { id: 1, path: '/', name: 'Home', exact: true },
        { id: 2, path: '/about', name: 'About', exact: true },
        { id: 3, path: '/services', name: 'Services', exact: true },
        { id: 4, path: '/contact', name: 'Contact', exact: true },
        { id: 5, path: '*', name: 'NotFound' }
      ];


      
    return (
        <nav>
        <div className="md:hidden" onClick={()=> setOpen(!open)}>
            {
                open === true ? <IoMdClose className="text-3xl"></IoMdClose> 
                : <IoMdMenu className="text-3xl "></IoMdMenu>
            }
        
        </div>
         <ul className="md:flex">
            {
                routes.map(route =>  <Link key={route.id} route={route}></Link> )
            }
         </ul>
        </nav>
    );
};

export default Navbar;