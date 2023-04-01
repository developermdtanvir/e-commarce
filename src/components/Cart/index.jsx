function Cart({ cart }) {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        sum = sum + element.price;
    }
    let totalPrice = Math.ceil(sum);
    console.log(totalPrice);
    return (
        <div>
            <h1>Total Cart {cart.length}</h1>
            <h1>Price {totalPrice} </h1>
        </div>
    )
}

export default Cart;