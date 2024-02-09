import cart from './assets/cart.svg'
import Cart from '../Cart/Cart'
import { useContext } from 'react'
import { CartContext } from '../../Contenxt/CartContenxt'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'bloack' : 'none'}}>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </Link>
    )
}

export default CartWidget