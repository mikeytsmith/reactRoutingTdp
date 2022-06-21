import {Link} from 'react-router-dom';

const Nav = () => {
return(
    <>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/shop">Shop</Link>
    <br/>
    <Link to="/contact">Contact</Link>
    <br/>
    <Link to="/users">Users</Link>
    </>
);
};
export default Nav;