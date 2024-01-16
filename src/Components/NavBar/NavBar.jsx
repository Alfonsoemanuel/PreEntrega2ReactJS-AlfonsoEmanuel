import classes from './NavBar.module.css'
import { Button } from 'bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to='/' className={classes.h1}>La magica</Link>
            <section>
                <Link to='category/interior' className={'btn btn-danger'}>Interior</Link>
                <Link to='category/exterior' className={'btn btn-danger'}>Exterior</Link>
                <Link to='category/diluyente' className={'btn btn-danger'}>Diluyentes</Link>
                <CartWidget/>
            </section>
        </nav>
    )
}

export default NavBar