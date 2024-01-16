import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setProduct(response)
            })
    }, [id])

    if(!product) {
        return <h1>El producto no existe</h1>
    }
    return (
        <div>
            <h1>Detalle</h1>
            <h2>{product?.name}</h2>
            <a href="#">
            <img src={product?.img} alt=""/>
            </a>
            <h3>{product?.description}</h3>
            <h3>${product?.price}</h3>
            <button>Comprar</button>
        </div>
    )
}

export default ItemDetailContainer