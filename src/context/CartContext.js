import React, { useContext, useState } from "react";

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

    const addItem = (productToAdd, quantity) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.quantity = quantity
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        quantity: quantity
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

	const totalPrice = () => {
		return cart.reduce((prev, act) => prev + act.quantity *  act.precioVenta , 0);
	};

	const totalProducts = () =>
		cart.reduce(
			(acumulador, productoActual) => acumulador + productoActual.quantity,
			0,
		);

	const clearCart = () => setCart([]);

	const isInCart = (id) =>
		cart.find((product) => product.id === id) ? true : false;

	const removeProduct = (id) =>
		setCart(cart.filter((product) => product.id !== id));

	return (
		<CartContext.Provider
			value={{
				clearCart,
				isInCart,
				removeProduct,
				addItem,
				totalPrice,
				totalProducts,
				cart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;