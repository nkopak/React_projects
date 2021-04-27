import ProductItem from "../productItem/ProductItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleItemInCart, toggleItemInWishlist} from "../../redux";

export const ProductList = ({products}) => {

    const dispatch = useDispatch();

    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({cart, wishlist}));

    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    }
    const onAddToWishlist = (product) => {
        dispatch(toggleItemInWishlist(product))
    }

    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    isAddedToCart={!cart.find(({id})=> id === product.id)}
                    isAddedToWishlist={!wishlist.find(({id}) => id === product.id)}
                    key={products.id}
                    onAddToCart={onAddToCart}
                    onAddToWishlist={onAddToWishlist}
                    product={product}/>
            ))}
        </div>
    );
}
