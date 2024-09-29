import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
      return (
            <div>
               <h2>Navbar</h2>  
               <nav>
                  
               <Link to="/">Home</Link>
               <NavLink to="/users" >Users</NavLink>
               
               <NavLink to="Posts" >Posts</NavLink>
               <NavLink to="about" >about</NavLink>
               <NavLink to="/contact" >contact</NavLink>
              

               </nav>
                  
                 
                  
            </div>
      );
};

export default Header;



