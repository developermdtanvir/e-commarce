import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../context/AuthContext";
import Cart from "../Cart";
import Product from "../Product";

function Shop() {
    const [cart, setCart] = useState([]);
    const handleAddToCart = (data) => {
        const newCart = [...cart, data];
        setCart(newCart);
    }

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
        <div className=" flex">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-2/3">
                {
                    products.map(data => <Product handleAddToCart={handleAddToCart} hero={true} data={data} key={data.id} />)
                }
            </div>
            <div className="w-1/3">
                <Cart cart={cart} />
            </div>
        </div>
    )
}

export default Shop;