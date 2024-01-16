import { Link } from "react-router-dom"

const Item = ({ id, name, img , price}) => {
    return (
        <div style={{ background: 'white' , margin: 10}}>
            <h2>{name}</h2>
            <img src={img} style={{ width: 100}}/>
            <h3>${price}</h3>
            <Link className={'btn btn-danger'} to={`/detail/${id}`}>Ver detalles</Link>
            <button>Comprar</button>
        </div> 
    )
}

export default Item