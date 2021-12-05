
import React from "react";
import { Link  } from "react-router-dom"; 

 const Navbar = () => {
     return(

        <nav>
            <div class="nav-wrapper">
                <Link href="#" class="brand-logo" to='./'>My Blog</Link>
                <ul class="right hide-on-med-and-down">
                <li> <Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
            
       
        
     )
 }

 export default Navbar


   



// <div class="nav-wrapper"> 
        
//         <Link to='/'>My Blog</Link>
//        <Link to='/'>Home</Link>
//        <Link to='/about'>About</Link>
//        <Link to='/contact'>Contact</Link>
   
// //    </div>
   

