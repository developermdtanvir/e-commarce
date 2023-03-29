import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import Product from "../Product";

function Shop() {
    const { user } = useContext(AuthProvider)
    console.log(user, 'user');

    const [products, setProducts] = useState([]);
    console.log(products, 'product');
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {

            })
    }, [])

    if (!products.length) {
        return <h1 className=" text-5xl bg-orange-400">Loading.........</h1>
    }

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                products.map(data => <Product data={data} key={data.id} />)
            }
        </div>
    )
}

export default Shop;