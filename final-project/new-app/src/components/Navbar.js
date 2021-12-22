import React from "react";
import { Link  } from "react-router-dom";


 const Navbar = () => {
     return(

        <>
            <nav className="navbar">
            
                <Link className="link home" to='/'>Home</Link> 
                <Link className="link"  to='/Favorite'>Favorite</Link>
                <Link className="link"  to='/Login'>Login</Link>
                <Link className="link"  to='/Register'>SignUp</Link>
                
           
            </nav>
        
        </> 
       
        
     )
 }

 export default Navbar


   
//  <Link className="link"  to='/about'>About</Link>
//  <Link className="link"  to='/contact'>Contact</Link>