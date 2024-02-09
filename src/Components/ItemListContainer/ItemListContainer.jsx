import { useState, useEffect } from "react"
import { getProducts , getProductByCategory} from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

import { db } from "../../services/firebase/firebase/firebaseConfig"
import { getDocs, collection, QueryDocumentSnapshot } from "firebase/firestore" 
import { getDoc } from "firebase/firestore"

const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productsCollection = collection (db, 'products')

        getDoc(productsCollection)
            .then(querySnapshot => {
                const fields = querySnapshot.data()
                const productAdapted = { id: QueryDocumentSnapshot.id, ...fields}
                    setProducts(productsAdapted)
                })
                .catch(error => {
                    showNotification('error', 'hubo un error')
                })
                .finally(() => {
                    setLoading(false)
                })
/*(asyncmock)        const asyncFunction = categoryId ? getProductByCategory : getProducts
    
        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })*/
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