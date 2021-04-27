import {useSelector} from "react-redux";
import {useMemo} from "react";

export const Header = () => {

    const {cart, wishlist} = useSelector(({cart: {cart}, wishlist: {wishlist}}) => ({
        cart,
        wishlist
    }))

    let cartPricesArr = [];
    let wishlistPricesArr = [];

    const pricesCalc = useMemo(()=>(arr, target) => {
        for (const obj of arr) {
            target.push(obj.price)
        }
    },[cartPricesArr,
    wishlistPricesArr]);

    pricesCalc(cart, cartPricesArr);
    pricesCalc(wishlist, wishlistPricesArr);

    const cartPrice = cartPricesArr.reduce((acc,value) => acc + value, 0);
    const wishlistPrice = wishlistPricesArr.reduce((acc,value) => acc + value, 0);
    console.log(cartPrice);
    console.log(wishlistPrice);
    console.log(cart);

    return (
        <header className={'d-flex justify-between align-center'}>
            <h2>Online shop</h2>
            <div className={'d-flex justify-between'}>
                <div className={'mx-10'} title={`Total price: ${wishlistPrice}`}>wishlist: {wishlist.length}</div>
                <div className={'mx-10'} title={`Total price: ${cartPrice}`}>cart: {cart.length}</div>
            </div>
        </header>
    );
}
