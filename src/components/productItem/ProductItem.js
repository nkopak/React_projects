export default function ProductItem({
        onAddToCart,
        onAddToWishlist,
        isAddedToWishlist,
        isAddedToCart,
        product,
        product: {id, title, price, description, category, image}
    }) {
    return (
        <div>
            <h5>{title}</h5>
            <h5>{description}</h5>
            <button
                style={{background: !isAddedToCart ? 'lightpink' : 'lightgreen'}}
                onClick={() => onAddToCart(product)}>
                {isAddedToCart ? 'Add to cart' : 'Remove from cart'}
            </button>
            <button
                style={{background: !isAddedToWishlist ? 'lightpink' : 'lightgreen'}}
                onClick={() => onAddToWishlist(product)}>
                {isAddedToWishlist ? 'Add to wishlist' : 'remove from wishlist'}
            </button>
            <hr/>
        </div>
    );
}
