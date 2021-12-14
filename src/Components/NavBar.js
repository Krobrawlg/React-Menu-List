import Cart from './Cart';
import classes from './Navbar.module.css'

const NavBar = () => {
    return(
        <header className= {classes.wrapper}>
            <h1>React Meals</h1>
            <Cart></Cart>
        </header>
    )
}

export default NavBar;