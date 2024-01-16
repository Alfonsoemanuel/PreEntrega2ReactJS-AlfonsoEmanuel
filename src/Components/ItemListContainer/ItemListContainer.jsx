import { useState, useEffect } from "react"
import { getProducts , getProductByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductByCategory : getProducts
    
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
    }, [categoryId])
    console.log(products)

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer