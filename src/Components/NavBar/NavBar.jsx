import classes from './NavBar.module.css'
import { Button } from 'bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className={classes.logo}>La magica</Link>
            <section className={classes.directorio}>
                <Link to='category/interior' className={classes.btn}>Interior</Link>
                <Link to='category/exterior' className={classes.btn}>Exterior</Link>
                <Link to='category/diluyente' className={classes.btn}>Diluyentes</Link>
                <CartWidget/>
            </section>
        </nav>
    )
}

export default NavBar